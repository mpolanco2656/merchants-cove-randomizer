import { ComplexityLevel } from '../types';
import { Locale, translations } from '../i18n';

interface FiltersProps {
  locale: Locale;
  playerCount: number;
  complexity: ComplexityLevel;
  hasFactionFestival: boolean;
  hasPaladins: boolean;
  useMultipleRogues: boolean;
  useManyTownsfolk: boolean;
  townsfolkCount: number;
  maxTownsfolk: number;
  onPlayerCountChange: (count: number) => void;
  onComplexityChange: (level: ComplexityLevel) => void;
  onFactionFestivalChange: (value: boolean) => void;
  onPaladinsChange: (value: boolean) => void;
  onMultipleRoguesChange: (value: boolean) => void;
  onManyTownsfolkChange: (value: boolean) => void;
  onTownsfolkCountChange: (count: number) => void;
}

interface ChipProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Chip = ({ label, checked, onChange }: ChipProps) => (
  <label className={`chip ${checked ? 'active' : ''}`}>
    <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
    <span className="chip-dot" />
    {label}
  </label>
);

export const Filters = ({
  locale,
  playerCount,
  complexity,
  hasFactionFestival,
  hasPaladins,
  useMultipleRogues,
  useManyTownsfolk,
  townsfolkCount,
  maxTownsfolk,
  onPlayerCountChange,
  onComplexityChange,
  onFactionFestivalChange,
  onPaladinsChange,
  onMultipleRoguesChange,
  onManyTownsfolkChange,
  onTownsfolkCountChange
}: FiltersProps) => {
  const sliderProgress = complexity * 25;
  const copy = translations[locale];

  return (
    <section className="filters-panel">
      <div className="filters-grid">
        <div className="filter-group">
          <span className="filter-label">{copy.filters.players}</span>
          <select
            value={playerCount}
            onChange={(event) => onPlayerCountChange(parseInt(event.target.value))}
            className="select-control"
          >
            {copy.filters.playerOptions.map((label, index) => (
              <option key={index + 1} value={index + 1}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <span className="filter-label">{copy.filters.complexity}</span>
          <div className="slider-wrap">
            <div className="slider-top">
              <span className="slider-hint">{copy.filters.complexityHint}</span>
              <span className="slider-val">{copy.filters.complexityLabels[complexity]}</span>
            </div>
            <input
              type="range"
              min={0}
              max={4}
              value={complexity}
              onChange={(event) =>
                onComplexityChange(parseInt(event.target.value) as ComplexityLevel)
              }
              className="range-control"
              style={{
                background: `linear-gradient(90deg, var(--gold) ${sliderProgress}%, var(--border) ${sliderProgress}%)`
              }}
            />
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">{copy.filters.modules}</span>
          <div className="chip-group">
            <Chip
              label={copy.filters.factionFestival}
              checked={hasFactionFestival}
              onChange={onFactionFestivalChange}
            />
            <Chip label={copy.filters.paladins} checked={hasPaladins} onChange={onPaladinsChange} />
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">{copy.filters.variants}</span>
          <div className="chip-group">
            <Chip
              label={copy.filters.multipleRogues}
              checked={useMultipleRogues}
              onChange={onMultipleRoguesChange}
            />
            <Chip
              label={copy.filters.manyTownsfolk}
              checked={useManyTownsfolk}
              onChange={onManyTownsfolkChange}
            />
          </div>

          {useManyTownsfolk && (
            <div className="inline-count-control">
              <span className="inline-count-label">{copy.filters.sets}</span>
              <div className="num-input-wrap">
                <button
                  type="button"
                  className="num-btn"
                  onClick={() => onTownsfolkCountChange(Math.max(2, townsfolkCount - 1))}
                  aria-label={copy.filters.decreaseTownsfolk}
                >
                  -
                </button>
                <span className="num-val">{townsfolkCount}</span>
                <button
                  type="button"
                  className="num-btn"
                  onClick={() =>
                    onTownsfolkCountChange(Math.min(maxTownsfolk, townsfolkCount + 1))
                  }
                  aria-label={copy.filters.increaseTownsfolk}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
