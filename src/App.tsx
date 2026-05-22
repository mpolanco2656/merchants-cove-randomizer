import { useEffect, useMemo, useState } from 'react';
import { Filters } from './components/Filters';
import { MerchantCard } from './components/MerchantCard';
import { TownsfolkCard } from './components/TownsfolkCard';
import { RogueCard } from './components/RogueCard';
import { merchants } from './data/merchants';
import { townsfolk } from './data/townsfolk';
import { rogues } from './data/rogues';
import { Locale, translations } from './i18n';
import { ComplexityLevel, Merchant, RandomSetup, Rogue, Townsfolk, ViewMode } from './types';

type ActiveTab = 'merchants' | 'townsfolk' | 'rogues';

const difficultyMap: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4
};

const randomPick = <T,>(items: T[], count: number) => {
  const pool = [...items];
  const selected: T[] = [];

  for (let index = 0; index < Math.min(count, pool.length); index++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    selected.push(pool[randomIndex]);
    pool.splice(randomIndex, 1);
  }

  return selected;
};

const getInitialLocale = (): Locale => {
  const storedLocale = window.localStorage.getItem('merchants-cove-locale');
  return storedLocale === 'en' || storedLocale === 'es' ? storedLocale : 'en';
};

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [complexity, setComplexity] = useState<ComplexityLevel>(2);
  const [useComplexityFilter, setUseComplexityFilter] = useState<boolean>(false);
  const [hasFactionFestival, setHasFactionFestival] = useState<boolean>(false);
  const [hasPaladins, setHasPaladins] = useState<boolean>(false);
  const [useMultipleRogues, setUseMultipleRogues] = useState<boolean>(false);
  const [useManyTownsfolk, setUseManyTownsfolk] = useState<boolean>(false);
  const [townsfolkCount, setTownsfolkCount] = useState<number>(2);
  const [mode, setMode] = useState<ViewMode>('');
  const [randomSetup, setRandomSetup] = useState<RandomSetup | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('merchants');
  const [spinAnim, setSpinAnim] = useState<boolean>(false);
  const copy = translations[locale];

  const filteredMerchants = useMemo(() => {
    if (!useComplexityFilter) return merchants;
    return merchants.filter((merchant) => merchant.complexity <= complexity + 1);
  }, [complexity, useComplexityFilter]);

  const filteredTownsfolk = useMemo(() => {
    return townsfolk.filter((item) => {
      if (item.requires === 'Faction Festival' && !hasFactionFestival) return false;
      if (item.requires === 'Paladins' && !hasPaladins) return false;
      return true;
    });
  }, [hasFactionFestival, hasPaladins]);

  const filteredRogues = useMemo(() => {
    if (!useComplexityFilter) return rogues;
    return rogues.filter((rogue) => difficultyMap[rogue.difficulty] <= complexity + 1);
  }, [complexity, useComplexityFilter]);

  useEffect(() => {
    setTownsfolkCount((current) => Math.max(2, Math.min(filteredTownsfolk.length, current)));
  }, [filteredTownsfolk.length]);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('merchants-cove-locale', locale);
  }, [locale]);

  const generateRandom = () => {
    if (filteredMerchants.length === 0) {
      alert(copy.alertNoMerchants);
      return;
    }

    const selectedMerchants: Merchant[] = randomPick(filteredMerchants, playerCount);
    const selectedTownsfolkCount = useManyTownsfolk
      ? Math.min(townsfolkCount, filteredTownsfolk.length)
      : 2;
    const selectedTownsfolk: Townsfolk[] = randomPick(filteredTownsfolk, selectedTownsfolkCount);

    let selectedRogues: Rogue[];
    if (useMultipleRogues) {
      selectedRogues = randomPick(
        filteredRogues.filter((rogue) => !rogue.notRecommendedMultiple),
        3
      );
    } else {
      selectedRogues = randomPick(filteredRogues, 1);
    }

    setRandomSetup({
      merchants: selectedMerchants,
      townsfolk: selectedTownsfolk,
      rogues: selectedRogues
    });
    setMode('random');
    setActiveTab('merchants');
    setSpinAnim(true);
    window.setTimeout(() => setSpinAnim(false), 700);
    window.setTimeout(() => {
      document.getElementById('results-anchor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleAllOptions = () => {
    setMode((current) => (current === 'all' ? '' : 'all'));
    setActiveTab('merchants');
  };

  const tabLabels: Record<ActiveTab, string> = {
    merchants: `${copy.summary.merchantsTab} (${filteredMerchants.length})`,
    townsfolk: `${copy.summary.townsfolkTab} (${filteredTownsfolk.length})`,
    rogues: `${copy.summary.roguesTab} (${filteredRogues.length})`
  };

  const tabs = Object.keys(tabLabels) as ActiveTab[];

  return (
    <div className="page-bg">
      <div className="app-container">
        <header className="header">
          <div className="language-switch" aria-label={copy.languageLabel}>
            <button
              type="button"
              className={locale === 'es' ? 'active' : ''}
              onClick={() => setLocale('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={locale === 'en' ? 'active' : ''}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </div>
          <span className="header-anchor">{copy.header.kicker}</span>
          <h1>Merchants Cove</h1>
          <div className="header-divider">{copy.header.divider}</div>
          <p className="header-sub">{copy.header.subtitle}</p>
        </header>

        <Filters
          locale={locale}
          playerCount={playerCount}
          complexity={complexity}
          useComplexityFilter={useComplexityFilter}
          hasFactionFestival={hasFactionFestival}
          hasPaladins={hasPaladins}
          useMultipleRogues={useMultipleRogues}
          useManyTownsfolk={useManyTownsfolk}
          townsfolkCount={townsfolkCount}
          maxTownsfolk={filteredTownsfolk.length}
          onPlayerCountChange={setPlayerCount}
          onComplexityChange={setComplexity}
          onComplexityFilterChange={setUseComplexityFilter}
          onFactionFestivalChange={setHasFactionFestival}
          onPaladinsChange={setHasPaladins}
          onMultipleRoguesChange={setUseMultipleRogues}
          onManyTownsfolkChange={setUseManyTownsfolk}
          onTownsfolkCountChange={setTownsfolkCount}
        />

        <div className="info-box blue">
          <div className="info-box-title">{copy.info.recommendedTitle}</div>
          <ul>
            <li>
              <strong>{copy.summary.merchants}:</strong>{' '}
              {copy.info.merchants(playerCount, useComplexityFilter)}
            </li>
            <li>
              <strong>Townsfolk:</strong> {copy.info.townsfolk}
            </li>
            <li>
              <strong>{copy.summary.rogues}:</strong> {copy.info.rogues}
            </li>
          </ul>
        </div>

        {useMultipleRogues && (
          <div className="info-box amber">
            <div className="info-box-title">{copy.info.multipleRoguesTitle}</div>
            {copy.info.multipleRoguesBody}
          </div>
        )}

        <div className="action-row">
          <button
            type="button"
            onClick={generateRandom}
            className={`btn btn-primary ${spinAnim ? 'spin' : ''}`}
          >
            {copy.actions.generate}
          </button>
          <button
            type="button"
            onClick={toggleAllOptions}
            className={`btn btn-secondary ${mode === 'all' ? 'active' : ''}`}
          >
            {mode === 'all' ? copy.actions.hideAll : copy.actions.showAll}
          </button>
        </div>

        <div id="results-anchor" />

        {mode === 'random' && randomSetup && (
          <div className="results fade-in">
            <div className="setup-summary fade-in fade-in-1">
              <div>
                <div className="setup-label">{copy.summary.merchants}</div>
                <div className="setup-val">{randomSetup.merchants.length}</div>
              </div>
              <div className="setup-divider" />
              <div>
                <div className="setup-label">{copy.summary.townsfolk}</div>
                <div className="setup-val">{randomSetup.townsfolk.length}</div>
              </div>
              <div className="setup-divider" />
              <div>
                <div className="setup-label">
                  {randomSetup.rogues.length > 1 ? copy.summary.rogues : copy.summary.rogue}
                </div>
                <div className="setup-val">{randomSetup.rogues.length}</div>
              </div>
              <div className="setup-divider" />
              <div>
                <div className="setup-label">{copy.summary.players}</div>
                <div className="setup-val">{playerCount}</div>
              </div>
            </div>

            <div className="tab-bar">
              <button
                type="button"
                className={`tab ${activeTab === 'merchants' ? 'active' : ''}`}
                onClick={() => setActiveTab('merchants')}
              >
                {copy.summary.merchantsTab} ({randomSetup.merchants.length})
              </button>
              <button
                type="button"
                className={`tab ${activeTab === 'townsfolk' ? 'active' : ''}`}
                onClick={() => setActiveTab('townsfolk')}
              >
                {copy.summary.townsfolkTab} ({randomSetup.townsfolk.length})
              </button>
              <button
                type="button"
                className={`tab ${activeTab === 'rogues' ? 'active' : ''}`}
                onClick={() => setActiveTab('rogues')}
              >
                {copy.summary.roguesTab} ({randomSetup.rogues.length})
              </button>
            </div>

            {activeTab === 'merchants' && (
              <div className="section-block fade-in">
                <div className="cards-grid">
                  {randomSetup.merchants.map((merchant) => (
                    <MerchantCard
                      key={merchant.id}
                      locale={locale}
                      merchant={merchant}
                      isRandomSelection
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'townsfolk' && (
              <div className="section-block fade-in">
                <div className="info-box blue">
                  {copy.info.townsfolkSetup(randomSetup.townsfolk.length, !useManyTownsfolk)}
                </div>
                <div className="cards-grid">
                  {randomSetup.townsfolk.map((item) => (
                    <TownsfolkCard
                      key={item.name}
                      locale={locale}
                      townsfolk={item}
                      isRandomSelection
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rogues' && (
              <div className="section-block fade-in">
                <div className="cards-grid">
                  {randomSetup.rogues.map((rogue) => (
                    <RogueCard key={rogue.id} locale={locale} rogue={rogue} isRandomSelection />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {mode === 'all' && (
          <div className="results fade-in">
            <div className="tab-bar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>

            {activeTab === 'merchants' && (
              <div className="section-block fade-in">
                {filteredMerchants.length > 0 ? (
                  <div className="cards-grid">
                    {filteredMerchants.map((merchant) => (
                      <MerchantCard key={merchant.id} locale={locale} merchant={merchant} />
                    ))}
                  </div>
                ) : (
                  <div className="empty">
                    <div className="empty-icon">?</div>
                    <div className="empty-text">{copy.empty.merchants}</div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'townsfolk' && (
              <div className="section-block fade-in">
                {filteredTownsfolk.length > 0 ? (
                  <div className="cards-grid">
                    {filteredTownsfolk.map((item) => (
                      <TownsfolkCard key={item.name} locale={locale} townsfolk={item} />
                    ))}
                  </div>
                ) : (
                  <div className="empty">
                    <div className="empty-icon">?</div>
                    <div className="empty-text">{copy.empty.townsfolk}</div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'rogues' && (
              <div className="section-block fade-in">
                {useMultipleRogues && <div className="info-box blue">{copy.info.noMulti}</div>}
                {filteredRogues.length > 0 ? (
                  <div className="cards-grid">
                    {filteredRogues.map((rogue) => (
                      <RogueCard
                        key={rogue.id}
                        locale={locale}
                        rogue={rogue}
                        useMultipleRogues={useMultipleRogues}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="empty">
                    <div className="empty-icon">?</div>
                    <div className="empty-text">{copy.empty.rogues}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
