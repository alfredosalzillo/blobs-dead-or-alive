import React from 'react';
import { GameState } from '@/lib/game';
import classes from './Controls.module.scss';

export type ControlsProps = {
  game: GameState
}
const Controls: React.FC<ControlsProps> = ({ game }) => {
  const {
    points, time, elapsed, round,
  } = game;
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
