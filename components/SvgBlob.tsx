import React, { useEffect, useState } from 'react';
import { Blob, Eye, Palette } from '@/lib/blob';
import { random, randomItem } from '@/lib/random';
import spline from '@/lib//spline';

export type SvgBlobEyeProps = Eye & { colors: Palette }
const SvgBlobEye: React.FC<SvgBlobEyeProps> = ({
  x, y, size, colors,
}) => (
  <g
    transform={`matrix(1,0,0,1,${x},${y})`}
    className="blob-eye"
  >
    <circle
      r={size}
      cx="0"
      cy="0"
      strokeWidth="2"
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
        // @ts-ignore
        '--radius': `${size / 2}px`,
      }}
    />
  </g>
);
const animations = ['eye-roll', 'eye-roll-reverse', 'eye-converge', 'eye-converge-reverse'];
export type SvgBlobProps = Blob & {
  animated?: boolean,
}

const SvgBlob: React.FC<SvgBlobProps> = (props) => {
  const {
    width,
    height,
    body,
    eyes,
    colors,
    animated,
  } = props;
  const [animation, setAnimation] = useState('');
  useEffect(() => {
    if (!animated) return undefined;
    if (!animation) {
      const timeout = setTimeout(() => setAnimation(randomItem(animations)), random(0, 20000));
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [animated, animation, setAnimation]);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`blob ${animated && animation}`}
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
        $
        {eyes.map((eye) => <SvgBlobEye key={[eye.x, eye.y, eye.size].join('-')} {...eye} colors={colors} />)}
      </g>
    </svg>
  );
};
export default SvgBlob;
