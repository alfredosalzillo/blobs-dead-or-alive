"use client";

import type React from "react";
import { useEffect, useState } from "react";
import type { BlobDescriptor } from "@alfredo.salzillo/blobs";
import { generateBlob } from "@alfredo.salzillo/blobs";
import Blob from "@alfredo.salzillo/blobs/Blob";
import classes from "./Loader.module.scss";

const BLOB_COUNT = 12;

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "LOADING PROGRESS..." }) => {
  const [blobs, setBlobs] = useState<BlobDescriptor[]>([]);

  useEffect(() => {
    const generateAll = () =>
      Array.from({ length: BLOB_COUNT }, () => generateBlob(60, 60));

    setBlobs(generateAll());
    const interval = setInterval(() => {
      setBlobs(generateAll());
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.text}>{message}</div>
      <div className={classes.blobs}>
        {blobs.map((blob) => (
          <div key={blob.id} className={classes.blob}>
            <Blob {...blob} animated />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
