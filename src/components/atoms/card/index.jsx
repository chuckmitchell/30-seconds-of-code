import { memo } from 'react';

// Icon
export const CardIcon = memo(({ icon, expertise }) => (
  <div
    className={`card-icon relative inline-block ${
      expertise ? 'br-round' : 'br-xl'
    } icon icon-${icon} before:fs-lg mt-1`}
  >
    {Boolean(expertise) && (
      <span className={`expertise box-border br-round ${expertise}`} />
    )}
  </div>
));

CardIcon.displayName = 'CardIcon';

// Title
export const CardTitle = memo(({ isSecondary = false, children }) => {
  const H = isSecondary ? 'h3' : 'h1';

  return (
    <H className='card-title m-0 txt-200 fs-lg md:fs-xl f-alt f-ellipsis'>
      {children}
    </H>
  );
});

CardTitle.displayName = 'CardTitle';

// Subtitle
export const CardSubtitle = memo(({ children }) => (
  <p className='card-subtitle txt-050 fs-xs m-0'>{children}</p>
));

CardSubtitle.displayName = 'CardSubtitle';

// Card
/**
 * Generic card component. Renders a simple `<div>` element with a base class
 * and passes everything else to the element.
 */
const Card = ({ className = '', ...rest }) => (
  <div className={`card srfc-01dp txt-100 ${className}`} {...rest} />
);

export default Card;
