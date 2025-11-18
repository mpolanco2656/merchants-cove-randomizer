import { ComplexityLevel, InteractivityLevel } from '../types';

interface FiltersProps {
  playerCount: number;
  complexity: ComplexityLevel;
  interactivity: InteractivityLevel;
  hasFactionFestival: boolean;
  hasPaladins: boolean;
  useMultipleRogues: boolean;
  useManyTownsfolk: boolean;
  townsfolkCount: number;
  maxTownsfolk: number;
  onPlayerCountChange: (count: number) => void;
  onComplexityChange: (level: ComplexityLevel) => void;
  onInteractivityChange: (level: InteractivityLevel) => void;
  onFactionFestivalChange: (value: boolean) => void;
  onPaladinsChange: (value: boolean) => void;
  onMultipleRoguesChange: (value: boolean) => void;
  onManyTownsfolkChange: (value: boolean) => void;
  onTownsfolkCountChange: (count: number) => void;
}

const complexityLabels = ['Muy Fácil', 'Fácil', 'Intermedio', 'Avanzado', 'Experto'];
const interactivityLabels = ['Muy Baja', 'Baja', 'Media', 'Alta', 'Muy Alta'];

export const Filters = ({
  playerCount,
  complexity,
  interactivity,
  hasFactionFestival,
  hasPaladins,
  useMultipleRogues,
  useManyTownsfolk,
  townsfolkCount,
  maxTownsfolk,
  onPlayerCountChange,
  onComplexityChange,
  onInteractivityChange,
  onFactionFestivalChange,
  onPaladinsChange,
  onMultipleRoguesChange,
  onManyTownsfolkChange,
  onTownsfolkCountChange
}: FiltersProps) => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl mb-6">
      {/* Player Count */}
      <div className="mb-5">
        <label className="block font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          Número de Jugadores
        </label>
        <select
          value={playerCount}
          onChange={(e) => onPlayerCountChange(parseInt(e.target.value))}
          className="w-full max-w-[200px] p-2.5 border-2 border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
        >
          <option value={1}>1 Jugador (Solo)</option>
          <option value={2}>2 Jugadores</option>
          <option value={3}>3 Jugadores</option>
          <option value={4}>4 Jugadores</option>
          <option value={5}>5 Jugadores</option>
        </select>
      </div>

      {/* Complexity Slider */}
      <div className="mb-5">
        <label className="block font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          Complejidad Máxima
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={4}
            value={complexity}
            onChange={(e) => onComplexityChange(parseInt(e.target.value) as ComplexityLevel)}
            className="flex-1 h-2 rounded bg-slate-200 appearance-none cursor-pointer slider"
          />
          <span className="min-w-[120px] text-right text-primary font-semibold text-sm">
            {complexityLabels[complexity]}
          </span>
        </div>
      </div>

      {/* Interactivity Slider */}
      <div className="mb-5">
        <label className="block font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          Interactividad Deseada
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={4}
            value={interactivity}
            onChange={(e) => onInteractivityChange(parseInt(e.target.value) as InteractivityLevel)}
            className="flex-1 h-2 rounded bg-slate-200 appearance-none cursor-pointer slider"
          />
          <span className="min-w-[120px] text-right text-primary font-semibold text-sm">
            {interactivityLabels[interactivity]}
          </span>
        </div>
      </div>

      {/* Module Checkboxes */}
      <div className="mb-5">
        <label className="block font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          Módulos / Expansiones Disponibles
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 p-2 px-4 bg-white border-2 border-slate-200 rounded-lg cursor-pointer hover:border-primary hover:bg-slate-50 transition-all">
            <input
              type="checkbox"
              checked={hasFactionFestival}
              onChange={(e) => onFactionFestivalChange(e.target.checked)}
              className="w-[18px] h-[18px] cursor-pointer"
            />
            <span className="text-sm text-slate-800 select-none">⚔️ Faction Festival</span>
          </label>
          <label className="flex items-center gap-2 p-2 px-4 bg-white border-2 border-slate-200 rounded-lg cursor-pointer hover:border-primary hover:bg-slate-50 transition-all">
            <input
              type="checkbox"
              checked={hasPaladins}
              onChange={(e) => onPaladinsChange(e.target.checked)}
              className="w-[18px] h-[18px] cursor-pointer"
            />
            <span className="text-sm text-slate-800 select-none">🛡️ Paladins</span>
          </label>
        </div>
      </div>

      {/* Townsfolk Options */}
      <div className="mb-5">
        <label className="block font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          Configuración de Townsfolk
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 p-2 px-4 bg-white border-2 border-slate-200 rounded-lg cursor-pointer hover:border-primary hover:bg-slate-50 transition-all">
            <input
              type="checkbox"
              checked={useManyTownsfolk}
              onChange={(e) => onManyTownsfolkChange(e.target.checked)}
              className="w-[18px] h-[18px] cursor-pointer"
            />
            <span className="text-sm text-slate-800 select-none">👥 Many Townsfolk (más de 2 sets)</span>
          </label>
        </div>
        {useManyTownsfolk && (
          <div className="mt-3">
            <label className="block text-[13px] text-slate-600 mb-2">
              Cantidad de Sets de Townsfolk:
            </label>
            <input
              type="number"
              min={2}
              max={maxTownsfolk}
              value={townsfolkCount}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 2;
                onTownsfolkCountChange(Math.max(2, Math.min(maxTownsfolk, val)));
              }}
              className="w-full max-w-[100px] p-2.5 border-2 border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
            />
          </div>
        )}
      </div>

      {/* Multiple Rogues */}
      <div className="mb-0">
        <label className="block font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
          Variantes de Rogues
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 p-2 px-4 bg-white border-2 border-slate-200 rounded-lg cursor-pointer hover:border-primary hover:bg-slate-50 transition-all">
            <input
              type="checkbox"
              checked={useMultipleRogues}
              onChange={(e) => onMultipleRoguesChange(e.target.checked)}
              className="w-[18px] h-[18px] cursor-pointer"
            />
            <span className="text-sm text-slate-800 select-none">🗡️ Multiple Rogues (3 cartas)</span>
          </label>
        </div>
      </div>
    </div>
  );
};
