"use client";

import { useEffect, useState } from "react";
import type { BlobDescriptor } from "@alfredo.salzillo/blobs";
import { generateBlob } from "@alfredo.salzillo/blobs";
import Blob from "@alfredo.salzillo/blobs/Blob";
import classes from "./default.module.scss";
import Logo from "@/components/Logo";
import Typography from "@/components/Typography";
import WantedPoster from "@/components/WantedPoster";

const useVariableBlob = () => {
  const [blob, setBlob] = useState<BlobDescriptor | null>(null);
  useEffect(() => {
    setBlob(generateBlob(200, 200));
    const interval = setInterval(() => setBlob(generateBlob(200, 200)), 500);
    return () => clearInterval(interval);
  }, []);
  return blob;
};

const LoadingScreen = () => {
  const blob = useVariableBlob();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Logo />
      </div>
      <div className={classes.main}>
        <WantedPoster
          picture={blob && <Blob {...blob} className={classes.blob} />}
        />
        <Typography variant="body" color="primary" gutterTop>
          ...waiting for blobs to hunt...
        </Typography>
      </div>
      <div className={classes.loading}>
        <Typography variant="body" color="primary">
          ...Loading
        </Typography>
      </div>
    </div>
  );
};

export default LoadingScreen;
