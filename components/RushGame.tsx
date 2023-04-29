'use client';

import React from 'react';

import type { GameControllerState } from '@/lib/game/use-game-controller';

import Game from '@/components/Game';
import rush from '@/lib/game/strategies/rush';

export type RushGameProps = {
  initialState: GameControllerState,
}
const RushGame: React.FC<RushGameProps> = ({
  initialState,
}) => <Game strategy={rush} initialState={initialState} />;

export default RushGame;
