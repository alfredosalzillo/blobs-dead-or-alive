"use client";

import { useRouter } from "next/navigation";
import classes from "./page.module.scss";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { useUserProgress } from "@/lib/game/useUserProgress";

const STAGES = Array.from({ length: 10 }, (_, i) => i + 1);

const CampaignPage = () => {
  const router = useRouter();
  const { progress, loading } = useUserProgress();

  const isUnlocked = (stage: number) => {
    if (stage === 1) return true;
    if (!progress) return false;
    return progress.completedStages.some((s) => s.stageNumber === stage - 1);
  };

  return (
    <>
      <Header title="CAMPAIGN" back="/" />
      <div className={classes.root}>
        {loading ? (
          <Loader message="LOADING PROGRESS..." />
        ) : (
          <div className={classes.stageList}>
            {STAGES.map((stage) => {
              const unlocked = isUnlocked(stage);
              return (
                <Button
                  key={stage}
                  onClick={() => unlocked && router.push(`/campaign/${stage}`)}
                  disabled={loading || !unlocked}
                >
                  STAGE {stage}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CampaignPage;
