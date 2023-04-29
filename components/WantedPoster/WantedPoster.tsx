import React from 'react';

import classes from './WantedPoster.module.scss';

export type WantedPosterProps = {
  picture: React.ReactNode,
}
const WantedPoster: React.FC<WantedPosterProps> = ({ picture }) => (
  <div className={classes.root}>
    <div className={classes.title}>
      WANTED
    </div>
    <div className={classes.subtitle}>
      Dead or Alive
    </div>
    <div className={classes.picture}>
      {picture}
    </div>
    <div className={classes.reward}>
      100 REWARD
    </div>
  </div>
);

export default WantedPoster;
