import React from 'react';

export default function WantedPoster(props) {
  const { children } = props;
  return (
    <div className="wanted">
      <div className="wanted-title">
        WANTED
      </div>
      <div className="wanted-subtitle">
        Dead or Alive
      </div>
      <div className="wanted-picture">
        {children}
      </div>
      <div className="wanted-reward">
        100 REWARD
      </div>
    </div>
  );
}
