"use client";

import type React from "react";
import Game from "@/components/Game";
import rush from "@/lib/game/strategies/rush";
import type { GameControllerState } from "@/lib/game/useGameController";

export type RushGameProps = {
  initialState: GameControllerState;
};
const RushGame: React.FC<RushGameProps> = ({ initialState }) => (
  <Game strategy={rush} initialState={initialState} />
);

export default RushGame;
