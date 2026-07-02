import './Button.css';

/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * size: 'md' | 'lg'
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = null,
  onClick,
  className = '',
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
}
