import { Townsfolk } from '../types';

interface TownsfolkCardProps {
  townsfolk: Townsfolk;
  isRandomSelection?: boolean;
}

export const TownsfolkCard = ({ townsfolk, isRandomSelection = false }: TownsfolkCardProps) => {
  return (
    <div
      className={`bg-white border-2 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
        isRandomSelection
          ? 'bg-gradient-to-br from-slate-50 to-slate-100 border-primary border-[3px]'
          : 'border-slate-200 hover:border-primary'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 inline">{townsfolk.name}</h3>
          {townsfolk.requires && (
            <span className="inline-block ml-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-xl text-[11px] font-semibold">
              ⚠️ Requiere {townsfolk.requires}
            </span>
          )}
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-3">
        {townsfolk.description}
      </p>

      <p className="text-slate-500 text-[13px] leading-snug italic mb-3 pl-3 border-l-[3px] border-slate-200">
        "{townsfolk.guideText}"
      </p>

      <div className="text-primary text-[13px] font-semibold mb-3">
        Interactividad: {townsfolk.interactivity} | Complejidad: {townsfolk.complexity}
      </div>

      <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-xl text-xs font-semibold">
        {townsfolk.expansion}
      </span>
    </div>
  );
};
