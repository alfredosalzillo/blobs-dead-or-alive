"use client";

import type React from "react";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Game from "@/components/Game";
import type { Stage } from "@/lib/game/strategies/stage";
import {
  createInitialState,
  createStageStrategy,
} from "@/lib/game/strategies/stage";
import { useUserProgress } from "@/lib/game/useUserProgress";

export type StageGameProps = {
  stage: Stage;
  stageNumber: number;
};
const StageGame: React.FC<StageGameProps> = ({ stage, stageNumber }) => {
  const router = useRouter();
  const strategy = useMemo(() => createStageStrategy(stage), [stage]);
  const initialState = useMemo(() => createInitialState(stage), [stage]);
  const { completeStage } = useUserProgress();

  return (
    <Game
      strategy={strategy}
      initialState={initialState}
      onWin={async (points) => {
        await completeStage(stageNumber, points);
        router.replace("/campaign");
      }}
    />
  );
};

export default StageGame;
