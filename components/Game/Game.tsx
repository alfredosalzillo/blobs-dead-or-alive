'use client';

import WantedPoster from '@/components/WantedPoster';
import React from 'react';
import Blob from '@/components/Blob';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import useGameController, { GameControllerState, GameControllerStrategy } from '@/lib/game/use-game-controller';
import classes from './Game.module.scss';
import Controls from './Controls';

const StartModal = dynamic(() => import('@/components/StartModal'), { ssr: false });
const LoseModal = dynamic(() => import('@/components/LoseModal'), { ssr: false });
const WinModal = dynamic(() => import('@/components/WinModal'), { ssr: false });

const gridSize = (size: number): React.CSSProperties => {
  const rows = Math.sqrt(size);
  const columns = Math.sqrt(size);
  return {
    gridTemplateColumns: `repeat(${columns}, calc( 100% / ${columns}))`,
    gridTemplateRows: `repeat(${rows}, calc( 100% / ${rows}))`,
  };
};

export type GameProps = {
  initialState: GameControllerState,
  strategy: GameControllerStrategy,
}
const Game: React.FC<GameProps> = ({ strategy, initialState }) => {
  const router = useRouter();
  const controller = useGameController(strategy, initialState);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Controls
          round={controller.round}
          points={controller.points}
          elapsed={controller.elapsed}
          time={controller.time}
        />
        <WantedPoster picture={<Blob {...controller.wanted} />} />
      </div>
      <div
        className={classes.board}
        style={gridSize(controller.blobs.length)}
      >
        {controller.blobs.map((blob) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            key={blob.id}
            role="button"
            tabIndex={-1}
            className={classes.box}
            onClick={() => controller.capture(blob)}
            style={{ backgroundColor: blob.colors.dark }}
          >
            <Blob {...blob} animated />
          </div>
        ))}
      </div>
      <StartModal
        onStart={() => controller.restart()}
        open={controller.status === 'start'}
      />
      <LoseModal
        round={controller.round}
        points={controller.points}
        captured={controller.captured}
        onRetry={() => controller.restart()}
        onBack={() => router.back()}
        open={controller.status === 'loose'}
      />
      <WinModal
        round={controller.round}
        points={controller.points}
        captured={controller.captured}
        onRetry={() => controller.restart()}
        onBack={() => router.push('/campaign/')}
        open={controller.status === 'win'}
      />
    </div>
  );
};

export default Game;
