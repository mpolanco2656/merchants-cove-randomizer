import { useState, useMemo } from 'react';
import { Filters } from './components/Filters';
import { MerchantCard } from './components/MerchantCard';
import { TownsfolkCard } from './components/TownsfolkCard';
import { RogueCard } from './components/RogueCard';
import { merchants } from './data/merchants';
import { townsfolk } from './data/townsfolk';
import { rogues } from './data/rogues';
import {
  ComplexityLevel,
  InteractivityLevel,
  ViewMode,
  RandomSetup,
  Merchant,
  Townsfolk,
  Rogue
} from './types';

function App() {
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [complexity, setComplexity] = useState<ComplexityLevel>(2);
  const [interactivity, setInteractivity] = useState<InteractivityLevel>(2);
  const [hasFactionFestival, setHasFactionFestival] = useState<boolean>(false);
  const [hasPaladins, setHasPaladins] = useState<boolean>(false);
  const [useMultipleRogues, setUseMultipleRogues] = useState<boolean>(false);
  const [useManyTownsfolk, setUseManyTownsfolk] = useState<boolean>(false);
  const [townsfolkCount, setTownsfolkCount] = useState<number>(2);
  const [mode, setMode] = useState<ViewMode>('');
  const [randomSetup, setRandomSetup] = useState<RandomSetup | null>(null);

  // Filter data based on settings
  const filteredMerchants = useMemo(() => {
    return merchants.filter(m => m.complexity <= complexity + 1);
  }, [complexity]);

  const filteredTownsfolk = useMemo(() => {
    return townsfolk.filter(t => {
      if (t.requires === 'Faction Festival' && !hasFactionFestival) return false;
      if (t.requires === 'Paladins' && !hasPaladins) return false;
      return true;
    });
  }, [hasFactionFestival, hasPaladins]);

  const filteredRogues = useMemo(() => {
    const difficultyMap: Record<string, number> = {
      'Beginner': 1,
      'Intermediate': 2,
      'Advanced': 3,
      'Expert': 4
    };
    return rogues.filter(r => difficultyMap[r.difficulty] <= complexity + 1);
  }, [complexity]);

  // Generate random setup
  const generateRandom = () => {
    if (filteredMerchants.length === 0) {
      alert('No hay merchants disponibles con estos filtros');
      return;
    }

    // Select Merchants
    const selectedMerchants: Merchant[] = [];
    const availableMerchants = [...filteredMerchants];
    for (let i = 0; i < Math.min(playerCount, availableMerchants.length); i++) {
      const randomIndex = Math.floor(Math.random() * availableMerchants.length);
      selectedMerchants.push(availableMerchants[randomIndex]);
      availableMerchants.splice(randomIndex, 1);
    }

    // Select Townsfolk
    const selectedTownsfolk: Townsfolk[] = [];
    const availableTownsfolk = [...filteredTownsfolk];
    const numSets = useManyTownsfolk
      ? Math.min(townsfolkCount, availableTownsfolk.length)
      : 2;

    for (let i = 0; i < numSets; i++) {
      if (availableTownsfolk.length === 0) break;
      const randomIndex = Math.floor(Math.random() * availableTownsfolk.length);
      selectedTownsfolk.push(availableTownsfolk[randomIndex]);
      availableTownsfolk.splice(randomIndex, 1);
    }

    // Select Rogues
    let selectedRogues: Rogue[];
    if (useMultipleRogues) {
      const availableRoguesForMultiple = filteredRogues.filter(r => !r.notRecommendedMultiple);
      selectedRogues = [];
      const tempRogues = [...availableRoguesForMultiple];

      for (let i = 0; i < Math.min(3, tempRogues.length); i++) {
        const randomIndex = Math.floor(Math.random() * tempRogues.length);
        selectedRogues.push(tempRogues[randomIndex]);
        tempRogues.splice(randomIndex, 1);
      }
    } else {
      const randomRogue = filteredRogues[Math.floor(Math.random() * filteredRogues.length)];
      selectedRogues = [randomRogue];
    }

    setRandomSetup({
      merchants: selectedMerchants,
      townsfolk: selectedTownsfolk,
      rogues: selectedRogues
    });
    setMode('random');
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
      <h1 className="text-center text-slate-700 mb-2 text-[32px] font-bold">
        ⚓ Merchants Cove Setup Selector
      </h1>
      <div className="text-center text-slate-500 mb-8 text-base">
        Herramienta interactiva para seleccionar la configuración perfecta de tu partida
      </div>

      <Filters
        playerCount={playerCount}
        complexity={complexity}
        interactivity={interactivity}
        hasFactionFestival={hasFactionFestival}
        hasPaladins={hasPaladins}
        useMultipleRogues={useMultipleRogues}
        useManyTownsfolk={useManyTownsfolk}
        townsfolkCount={townsfolkCount}
        maxTownsfolk={filteredTownsfolk.length}
        onPlayerCountChange={setPlayerCount}
        onComplexityChange={setComplexity}
        onInteractivityChange={setInteractivity}
        onFactionFestivalChange={setHasFactionFestival}
        onPaladinsChange={setHasPaladins}
        onMultipleRoguesChange={setUseMultipleRogues}
        onManyTownsfolkChange={setUseManyTownsfolk}
        onTownsfolkCountChange={setTownsfolkCount}
      />

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
        <div className="font-bold text-blue-900 mb-2">📋 Setup Recomendado</div>
        <ul className="text-blue-900 text-sm leading-relaxed ml-5 list-disc">
          <li>
            <strong>Merchants:</strong> El randomizer seleccionará {playerCount} merchants según
            complejidad
          </li>
          <li>
            <strong>Townsfolk:</strong> 2 sets por defecto (Locals + Mercenaries recomendados para
            primera partida)
          </li>
          <li>
            <strong>Rogues:</strong> 1 carta por defecto (variante Multiple Rogues: 3 cartas
            barajadas)
          </li>
          <li>
            <strong>Duración:</strong> Faction Festival hace partidas más lentas y amigables. Para
            días más largos usa variante "Longer Days"
          </li>
        </ul>
      </div>

      {/* Warning for Multiple Rogues */}
      {useMultipleRogues && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg mb-6">
          <div className="font-bold text-amber-900 mb-2">
            ⚠️ Variante Multiple Rogues Activada
          </div>
          <div className="text-amber-900 text-sm leading-relaxed">
            Baraja 3 Rogue cards y colócalas en el área de Rogue. Durante Cleanup de cada ronda,
            retira la carta superior. NO recomendados: Kraken, The Fence, Vigilantes,
            Revolutionaries (se excluyen automáticamente del randomizer).
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap">
        <button
          onClick={generateRandom}
          className="flex-1 min-w-[200px] p-4 px-8 border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 uppercase tracking-wide bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
        >
          🎲 Generar Setup Aleatorio
        </button>
        <button
          onClick={() => setMode('all')}
          className="flex-1 min-w-[200px] p-4 px-8 border-2 border-primary rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 uppercase tracking-wide bg-white text-primary hover:bg-primary hover:text-white"
        >
          📋 Ver Todas las Opciones
        </button>
      </div>

      {/* Results */}
      {mode === 'random' && randomSetup && (
        <div className="mt-8">
          {/* Merchants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-[3px] border-primary">
              ⚒️ Merchants Seleccionados ({randomSetup.merchants.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {randomSetup.merchants.map((m, i) => (
                <MerchantCard key={i} merchant={m} isRandomSelection />
              ))}
            </div>
          </div>

          {/* Townsfolk */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-[3px] border-primary">
              👥 Townsfolk Sets ({randomSetup.townsfolk.length})
            </h2>
            <div className="mb-4 p-3 bg-slate-50 rounded-lg text-sm">
              📋 Setup: Mezcla estos {randomSetup.townsfolk.length} sets juntos en un solo mazo.{' '}
              {!useManyTownsfolk && 'Primera partida: Locals + Mercenaries recomendado.'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {randomSetup.townsfolk.map((t, i) => (
                <TownsfolkCard key={i} townsfolk={t} isRandomSelection />
              ))}
            </div>
          </div>

          {/* Rogues */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-[3px] border-primary">
              {useMultipleRogues
                ? `🗡️ Rogue Cards - Multiple Rogues (${randomSetup.rogues.length} cartas barajadas)`
                : '🗡️ Rogue Card'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {randomSetup.rogues.map((r, i) => (
                <RogueCard key={i} rogue={r} isRandomSelection />
              ))}
            </div>
          </div>
        </div>
      )}

      {mode === 'all' && (
        <div className="mt-8">
          {/* All Merchants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-[3px] border-primary">
              ⚒️ Merchants Disponibles ({filteredMerchants.length})
            </h2>
            {filteredMerchants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredMerchants.map((m, i) => (
                  <MerchantCard key={i} merchant={m} />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 text-slate-500">
                <div className="text-6xl mb-4">🔍</div>
                <div>No hay merchants disponibles con estos criterios</div>
              </div>
            )}
          </div>

          {/* All Townsfolk */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-[3px] border-primary">
              👥 Townsfolk Sets Disponibles ({filteredTownsfolk.length})
            </h2>
            {filteredTownsfolk.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredTownsfolk.map((t, i) => (
                  <TownsfolkCard key={i} townsfolk={t} />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 text-slate-500">
                <div className="text-6xl mb-4">🔍</div>
                <div>No hay townsfolk disponibles</div>
              </div>
            )}
          </div>

          {/* All Rogues */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-[3px] border-primary">
              🗡️ Rogue Cards Disponibles ({filteredRogues.length})
            </h2>
            {useMultipleRogues && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                <div className="text-blue-900 text-sm">
                  🗡️ Rogues marcados con ❌ NO son recomendados para Multiple Rogues y se excluyen
                  del randomizer.
                </div>
              </div>
            )}
            {filteredRogues.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredRogues.map((r, i) => (
                  <RogueCard key={i} rogue={r} useMultipleRogues={useMultipleRogues} />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 text-slate-500">
                <div className="text-6xl mb-4">🔍</div>
                <div>No hay rogues disponibles</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
