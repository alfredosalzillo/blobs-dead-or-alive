'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import type { BlobDescriptor, EyeDescriptor, Palette } from '@/lib/blob';

import { random, randomItem } from '@/lib/random';
import spline from '@/lib//spline';

import classes from './Blob.module.scss';

export type EyeProps = EyeDescriptor & { colors: Palette }
const Eye: React.FC<EyeProps> = ({
  x, y, size, colors,
}) => (
  <g
    transform={`matrix(1,0,0,1,${x},${y})`}
    className={classes.eye}
  >
    <circle
      r={size}
      cx="0"
      cy="0"
      strokeWidth="2"
      stroke={colors.dark}
      fill={colors.light}
      className={classes.iris}
    />
    <circle
      r={size / 2}
      cx="0"
      cy="0"
      fill={colors.dark}
      className={classes.pupil}
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        '--radius': `${size / 2}px`,
      }}
    />
  </g>
);
const animations = [
  'eye-roll',
  'eye-roll-reverse',
  'eye-converge',
  'eye-converge-reverse',
];
type Animation = typeof animations[number];
const randomAnimation = () => randomItem<Animation>(animations);
export type BlobProps = BlobDescriptor & {
  animated?: boolean,
  className?: string,
}

const Blob: React.FC<BlobProps> = ({
  animated,
  body,
  className,
  colors,
  eyes,
  height,
  width,
}) => {
  const [animation, setAnimation] = useState<Animation | null>(null);
  useEffect(() => {
    if (!animated) return undefined;
    if (!animation) {
      const timeout = setTimeout(() => setAnimation(randomAnimation), random(0, 20000));
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [animated, animation, setAnimation]);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={clsx(classes.root, {
        [classes.animated]: animated,
        [classes.roll]: animation === 'eye-roll',
        [classes.rollReverse]: animation === 'eye-roll-reverse',
        [classes.converge]: animation === 'eye-converge',
        [classes.convergeReverse]: animation === 'eye-converge-reverse',
        [classes.flock]: animation === 'eye-flock',
      }, className)}
      onClick={() => setAnimation('eye-flock')}
      onAnimationEnd={() => setAnimation('')}
    >
      <path
        d={spline(body as any[], 1, true)}
        strokeWidth={2}
        stroke={colors.dark}
        fill={colors.primary}
      />
      <g>
        {eyes.map((eye) => <Eye key={[eye.x, eye.y, eye.size].join('-')} {...eye} colors={colors} />)}
      </g>
    </svg>
  );
};
export default Blob;
