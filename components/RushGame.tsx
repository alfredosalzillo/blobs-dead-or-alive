'use client';

import Game from '@/components/Game';
import { GameControllerState } from '@/lib/game/use-game-controller';
import rush from '@/lib/game/strategies/rush';
import React from 'react';

export type RushGameProps = {
  initialState: GameControllerState,
}
const RushGame: React.FC<RushGameProps> = ({
  initialState,
}) => <Game strategy={rush} initialState={initialState} />;

export default RushGame;
