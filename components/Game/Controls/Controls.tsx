import React from 'react';

import classes from './Controls.module.scss';

export type ControlsProps = {
  points: number,
  time: number,
  elapsed: number,
  round: number,
}
const Controls: React.FC<ControlsProps> = ({
  points, time, elapsed, round,
}) => {
  const progress = (time - elapsed) / time;
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <progress
          id="time-progress"
          value={progress}
          max={1}
          data-animated={elapsed > 0}
          className={classes.progress}
        >
          {elapsed}
          ms
        </progress>
        <label htmlFor="time-progress" className={classes.value}>
          {Math.round(time - elapsed)}
          ms
        </label>
      </div>
      <div className={classes.info}>
        <small>ROUND</small>
        <span className={classes.value}>{round}</span>
      </div>
      <div className={classes.info}>
        <small>POINTS</small>
        <span className={classes.value}>{points}</span>
      </div>
    </div>
  );
};
export default Controls;
