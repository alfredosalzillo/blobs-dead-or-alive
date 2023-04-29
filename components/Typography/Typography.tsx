import React from 'react';
import clsx from 'clsx';

import type { ComponentProps, JSXElementConstructor } from 'react';

import classes from './Typography.module.scss';

export type TypographyTextAlign =
  | 'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right'

export type TypographyVariant =
  | 'body'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

/**
 * The typography color variant
 */
export type TypographyColor = 'primary' | 'accent' | 'inherit'

const defaultVariantMapping = {
  body: 'p',
  caption: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading: 'span',
} as const;

export type TypographyProps<
  TVariant extends TypographyVariant = 'body',
  T extends
      | keyof JSX.IntrinsicElements
    // eslint-disable-next-line no-use-before-define
    | JSXElementConstructor<TProps> = typeof defaultVariantMapping[TVariant],
  TProps = ComponentProps<T>
> = TProps & {
  align?: TypographyTextAlign
  bold?: boolean
  children?: React.ReactNode
  className?: string
  color?: TypographyColor
  component?: T
  gutterBottom?: boolean
  gutterTop?: boolean
  noWrap?: boolean
  paragraph?: boolean
  variant?: TVariant | TypographyVariant
}

function Typography<
  TVariant extends TypographyVariant = 'body',
  T extends
      | keyof JSX.IntrinsicElements
    // eslint-disable-next-line no-use-before-define
    | JSXElementConstructor<TProps> = typeof defaultVariantMapping[TVariant],
  TProps = ComponentProps<T>
>(props: TypographyProps<TVariant, T, TProps>) {
  const {
    align,
    bold,
    children,
    className,
    color,
    component,
    gutterBottom,
    gutterTop,
    noWrap,
    paragraph,
    variant = 'body',
    ...componentProps
  } = props;

  const Component = (component
    || (paragraph ? 'p' : defaultVariantMapping[variant])
    || 'span') as T;
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Component
      {...componentProps}
      className={clsx({
        [classes.alignCenter]: align === 'center',
        [classes.alignRight]: align === 'right',
        [classes.alignLeft]: align === 'left',
        [classes.alignJustify]: align === 'justify',
        [classes.alignInherit]: align === 'inherit',
        [classes.bold]: bold,
        [classes.noWrap]: noWrap,
        [classes.colorPrimary]: color === 'primary',
        [classes.colorAccent]: color === 'accent',
        [classes.alignInherit]: color === 'inherit',
        [classes.h1]: variant === 'h1',
        [classes.h2]: variant === 'h2',
        [classes.h3]: variant === 'h3',
        [classes.h4]: variant === 'h4',
        [classes.h5]: variant === 'h5',
        [classes.h6]: variant === 'h6',
        [classes.body]: variant === 'body',
        [classes.paragraph]: paragraph,
        [classes.gutterBottom]: gutterBottom,
        [classes.gutterTop]: gutterTop,
      }, className)}
    >
      {children}
    </Component>
  );
}
export default Typography;
