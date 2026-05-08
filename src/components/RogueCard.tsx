import { Rogue } from '../types';
import { Locale, translateValue, translations } from '../i18n';

interface RogueCardProps {
  locale: Locale;
  rogue: Rogue;
  isRandomSelection?: boolean;
  useMultipleRogues?: boolean;
}

const difficultyMap: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4
};

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

export const RogueCard = ({
  locale,
  rogue,
  isRandomSelection = false,
  useMultipleRogues = false
}: RogueCardProps) => {
  const isNotRecommended = useMultipleRogues && rogue.notRecommendedMultiple;
  const copy = translations[locale];
  const difficultyStars = difficultyMap[rogue.difficulty] || 1;
  const description = locale === 'en' ? rogue.guideText : rogue.description;

  return (
    <div className={`card ${isRandomSelection ? 'selected' : ''} ${isNotRecommended ? 'not-recommended' : ''}`}>
      {isRandomSelection && <div className="selected-badge">&#10022;</div>}
      <div className="card-head">
        <div className="card-head-left">
          <span className="card-id">#{rogue.id}</span>
          <span className="card-name">{rogue.name}</span>
          {isNotRecommended && <span className="tag tag-not-rec">{copy.cards.noMulti}</span>}
        </div>
        <Stars count={difficultyStars} label={copy.cards.stars(difficultyStars, 4)} />
      </div>

      <div className="impact-row">
        {copy.cards.difficulty}: <span>{translateValue(locale, rogue.difficulty)}</span>
        &nbsp;|&nbsp; {copy.cards.impact}: <span>{translateValue(locale, rogue.impact)}</span>
        &nbsp;|&nbsp; {copy.cards.interactivity}:{' '}
        <span>{translateValue(locale, rogue.interactivity)}</span>
      </div>

      <p className="card-desc">{description}</p>

      <div className="card-footer">
        <span className="tag tag-expansion">{rogue.expansion}</span>
      </div>
    </div>
  );
};
