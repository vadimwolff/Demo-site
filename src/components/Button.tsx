import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'lg';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkProps = CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>;
type ActionProps = CommonProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

const classes = (variant: Variant, size: Size, className?: string) =>
  ['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ');

/** Anchors navigate, buttons act — the tag follows the behaviour, not the look. */
export function Button(props: LinkProps | ActionProps) {
  const { children, variant = 'primary', size = 'md', className, ...rest } = props;

  if (typeof rest.href === 'string') {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...anchorProps} className={classes(variant, size, className)}>
        <span className="btn__label">{children}</span>
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} type={buttonProps.type ?? 'button'} className={classes(variant, size, className)}>
      <span className="btn__label">{children}</span>
    </button>
  );
}
