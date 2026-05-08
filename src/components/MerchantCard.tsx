import { Merchant } from '../types';
import { Locale, translations } from '../i18n';

interface MerchantCardProps {
  locale: Locale;
  merchant: Merchant;
  isRandomSelection?: boolean;
}

const Stars = ({
  count,
  max = 4,
  label
}: {
  count: number;
  max?: number;
  label: string;
}) => (
  <span className="stars" aria-label={label}>
    {Array.from({ length: max }, (_, index) => (
      <span key={index} className={index < count ? 'star-filled' : undefined}>
        &#9733;
      </span>
    ))}
  </span>
);

export const MerchantCard = ({ locale, merchant, isRandomSelection = false }: MerchantCardProps) => {
  const copy = translations[locale];
  const description = locale === 'en' ? merchant.guideText : merchant.description;
  const supportingText = locale === 'en' ? merchant.tips : '';

  return (
    <div className={`card ${isRandomSelection ? 'selected' : ''}`}>
      {isRandomSelection && <div className="selected-badge">&#10022;</div>}
      <div className="card-head">
        <div className="card-head-left">
          <span className="card-id">#{merchant.id}</span>
          <span className="card-name">{merchant.name}</span>
        </div>
        <Stars count={merchant.complexity} label={copy.cards.stars(merchant.complexity, 4)} />
      </div>

      <div className="card-full-name">{merchant.fullName}</div>
      <div className="card-mechanic">{merchant.mechanics}</div>
      <p className="card-desc">{description}</p>
      {supportingText && <p className="card-quote">"{supportingText}"</p>}

      <div className="card-footer">
        <span className="tag tag-expansion">{merchant.expansion}</span>
        <span className="tag tag-difficulty">
          {copy.cards.complexity} {merchant.complexity}/4
        </span>
      </div>
    </div>
  );
};
