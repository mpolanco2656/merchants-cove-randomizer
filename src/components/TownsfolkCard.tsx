import { Townsfolk } from '../types';
import { Locale, translateValue, translations } from '../i18n';

interface TownsfolkCardProps {
  locale: Locale;
  townsfolk: Townsfolk;
  isRandomSelection?: boolean;
}

export const TownsfolkCard = ({
  locale,
  townsfolk,
  isRandomSelection = false
}: TownsfolkCardProps) => {
  const copy = translations[locale];
  const description = locale === 'en' ? townsfolk.guideText : townsfolk.description;

  return (
    <div className={`card ${isRandomSelection ? 'selected' : ''}`}>
      {isRandomSelection && <div className="selected-badge">&#10022;</div>}
      <div className="card-head">
        <div className="card-head-left">
          <span className="card-name">{townsfolk.name}</span>
          {townsfolk.requires && <span className="tag tag-requires">{townsfolk.requires}</span>}
        </div>
      </div>

      <div className="card-meta">
        <div className="meta-item">
          {copy.cards.interactivity}: <span>{translateValue(locale, townsfolk.interactivity)}</span>
        </div>
        <div className="meta-item">
          {copy.cards.complexity}: <span>{translateValue(locale, townsfolk.complexity)}</span>
        </div>
      </div>

      <p className="card-desc">{description}</p>

      <div className="card-footer">
        <span className="tag tag-expansion">{townsfolk.expansion}</span>
      </div>
    </div>
  );
};
