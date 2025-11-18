import { Rogue } from '../types';

interface RogueCardProps {
  rogue: Rogue;
  isRandomSelection?: boolean;
  useMultipleRogues?: boolean;
}

export const RogueCard = ({
  rogue,
  isRandomSelection = false,
  useMultipleRogues = false
}: RogueCardProps) => {
  const getDifficultyStars = (difficulty: string) => {
    const map: Record<string, number> = {
      'Beginner': 1,
      'Intermediate': 2,
      'Advanced': 3,
      'Expert': 4
    };
    return map[difficulty] || 1;
  };

  const isNotRecommended = useMultipleRogues && rogue.notRecommendedMultiple;

  return (
    <div
      className={`bg-white border-2 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
        isRandomSelection
          ? 'bg-gradient-to-br from-slate-50 to-slate-100 border-primary border-[3px]'
          : isNotRecommended
          ? 'opacity-60 border-red-500 border-2'
          : 'border-slate-200 hover:border-primary'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-primary text-white px-2.5 py-1 rounded-xl text-xs font-bold">
            #{rogue.id}
          </span>
          <h3 className="text-lg font-bold text-slate-800">{rogue.name}</h3>
          {isNotRecommended && (
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-xl text-[11px] font-semibold">
              ❌ No para Multiple
            </span>
          )}
        </div>
        <div className="text-amber-500 text-lg ml-2">
          {'⭐'.repeat(getDifficultyStars(rogue.difficulty))}
        </div>
      </div>

      <div className="text-primary text-[13px] font-semibold mb-2">
        {rogue.difficulty} | Impacto: {rogue.impact}
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-3">
        {rogue.description}
      </p>

      <p className="text-slate-500 text-[13px] leading-snug italic mb-3 pl-3 border-l-[3px] border-slate-200">
        "{rogue.guideText}"
      </p>

      <div className="text-primary text-[13px] font-semibold mb-3">
        Interactividad: {rogue.interactivity}
      </div>

      <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-xl text-xs font-semibold">
        {rogue.expansion}
      </span>
    </div>
  );
};
