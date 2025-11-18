import { Merchant } from '../types';

interface MerchantCardProps {
  merchant: Merchant;
  isRandomSelection?: boolean;
}

export const MerchantCard = ({ merchant, isRandomSelection = false }: MerchantCardProps) => {
  return (
    <div
      className={`bg-white border-2 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
        isRandomSelection
          ? 'bg-gradient-to-br from-slate-50 to-slate-100 border-primary border-[3px]'
          : 'border-slate-200 hover:border-primary'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-primary text-white px-2.5 py-1 rounded-xl text-xs font-bold">
            #{merchant.id}
          </span>
          <h3 className="text-lg font-bold text-slate-800">{merchant.name}</h3>
        </div>
        <div className="text-amber-500 text-lg ml-2">
          {'⭐'.repeat(merchant.complexity)}
        </div>
      </div>

      <div className="text-primary text-[13px] font-semibold mb-2">
        {merchant.mechanics}
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-3">
        {merchant.description}
      </p>

      <p className="text-slate-500 text-[13px] leading-snug italic mb-3 pl-3 border-l-[3px] border-slate-200">
        "{merchant.guideText}"
      </p>

      <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-xl text-xs font-semibold">
        {merchant.expansion}
      </span>
    </div>
  );
};
