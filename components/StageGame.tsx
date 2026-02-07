"use client";

import type React from "react";
import { useMemo } from "react";
import Game from "@/components/Game";
import type { Stage } from "@/lib/game/strategies/stage";
import {
  createInitialState,
  createStageStrategy,
} from "@/lib/game/strategies/stage";

export type StageGameProps = {
  stage: Stage;
};
const StageGame: React.FC<StageGameProps> = ({ stage }) => {
  const strategy = useMemo(() => createStageStrategy(stage), [stage]);
  const initialState = useMemo(() => createInitialState(stage), [stage]);
  return <Game strategy={strategy} initialState={initialState} />;
};

export default StageGame;
