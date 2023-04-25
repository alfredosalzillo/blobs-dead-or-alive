'use client';

import Game from '@/components/Game';
import React, { useMemo } from 'react';
import { createInitialState, createStageStrategy, Stage } from '@/lib/game/strategies/stage';

export type StageGameProps = {
  stage: Stage,
}
const StageGame: React.FC<StageGameProps> = ({
  stage,
}) => {
  const strategy = useMemo(() => createStageStrategy(stage), [stage]);
  const initialState = useMemo(() => createInitialState(stage), [stage]);
  return <Game strategy={strategy} initialState={initialState} />;
};

export default StageGame;
