"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import classes from "./page.module.scss";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useModal } from "@/plugins/modal-provider";

const InstructionsModal = dynamic(
  () => import("@/components/InstructionsModal"),
  { ssr: false },
);
const ComingSoonModal = dynamic(() => import("@/components/ComingSoonModal"), {
  ssr: false,
});

const HomePage = () => {
  const modal = useModal();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Logo />
      <Button fullWidth onClick={() => router.push("/rush")}>
        START GAME
      </Button>
      <Button
        fullWidth
        onClick={() =>
          modal.open("coming-soon", ComingSoonModal, {
            onContinue: () => modal.close("coming-soon"),
          })
        }
      >
        CAMPAIGN
      </Button>
      <Button
        fullWidth
        onClick={() =>
          modal.open("instructions", InstructionsModal, {
            onContinue: () => modal.close("instructions"),
          })
        }
      >
        INSTRUCTIONS
      </Button>
      <Button fullWidth onClick={() => router.push("/settings")}>
        SETTINGS
      </Button>
    </div>
  );
};

export default HomePage;
