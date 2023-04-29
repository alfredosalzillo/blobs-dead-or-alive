'use client';

import React, { useMemo } from 'react';

import type { Stage } from '@/lib/game/strategies/stage';

import Game from '@/components/Game';
import { createInitialState, createStageStrategy } from '@/lib/game/strategies/stage';

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
