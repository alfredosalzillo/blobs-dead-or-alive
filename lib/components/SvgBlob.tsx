import React, { useState, useEffect } from 'react';
import { Blob, Eye, Palette } from '../blob.ts';
import { random, randomItem } from '../random.ts';
import { spline } from '../spline.ts';

const SvgBlobEye = (props: Eye & { colors: Palette }) => {
  const { x, y, size, colors } = props
  return (
    <g
      transform={`matrix(1,0,0,1,${x},${y})`}
      className="blob-eye"
    >
      <circle
        r={size}
        cx="0"
        cy="0"
        stroke-width="2"
        stroke={colors.dark}
        fill={colors.light}
        className="blob-eye-iris"
      />
      <circle
        r={size / 2}
        cx="0"
        cy="0"
        fill={colors.dark}
        className="blob-eye-pupil"
        style={{
          '--radius': `${size / 2}px`,
        }}
      />
    </g>
  )
}
const animations = ['eye-roll', 'eye-roll-reverse', 'eye-converge', 'eye-converge-reverse'];
export type SvgBlobProps = Blob & {
  animated?: boolean,
}
const SvgBlob = ({
   width,
   height,
   body,
   eyes,
   colors,
   animated,
 }: SvgBlobProps) => {
  const [animation, setAnimation] = useState('');
  useEffect(() => {
    if (!animated) return;
    if (!animation) {
      const timeout = setTimeout(() => setAnimation(randomItem(animations)), random(0, 20000))
      return () => clearTimeout(timeout)
    }
  }, [animation, setAnimation])
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`blob ${animated && animation}`}
      onClick={() => setAnimation('eye-flock')}
      onAnimationEnd={() => setAnimation('')}
    >
      <path
        d={spline(body as any[], 1, true)}
        stroke-width={2}
        stroke={colors.dark}
        fill={colors.primary}
      />
      <g>
        ${eyes.map((eye) => <SvgBlobEye {...eye} colors={colors}/>)}
      </g>
    </svg>
  )
}

export default SvgBlob
