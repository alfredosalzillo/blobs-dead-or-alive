import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import AuthContext from "@/plugins/auth/AuthContext";
import { db } from "@/plugins/firebase";

export type CompletedStage = {
  stageNumber: number;
  points: number;
};

export type UserProgress = {
  completedStages: CompletedStage[];
};

export const useUserProgress = () => {
  const { user, ready } = useContext(AuthContext);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ready) return;
    if (!user) {
      setProgress(null);
      setLoading(false);
      return;
    }

    const docRef = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const completedStages = data.completedStages || [];
          setProgress({ ...data, completedStages } as UserProgress);
        } else {
          setProgress({ completedStages: [] });
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching user progress:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [user, ready]);

  const completeStage = async (stageNumber: number, points: number) => {
    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    const currentCompleted = progress?.completedStages || [];
    const stageIndex = currentCompleted.findIndex(
      (s) => s.stageNumber === stageNumber,
    );

    const updatedCompleted = [...currentCompleted];
    if (stageIndex === -1) {
      updatedCompleted.push({ stageNumber, points });
    } else if (points > currentCompleted[stageIndex].points) {
      updatedCompleted[stageIndex] = { stageNumber, points };
    } else {
      // No need to update if points are not higher
      return;
    }

    updatedCompleted.sort((a, b) => a.stageNumber - b.stageNumber);
    await setDoc(
      docRef,
      { completedStages: updatedCompleted },
      { merge: true },
    );
  };

  return { progress, loading, completeStage };
};
