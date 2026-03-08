"use client";

import type React from "react";
import Link from "next/link";
import classes from "./Header.module.scss";
import SmallLogo from "@/components/SmallLogo";
import Typography from "@/components/Typography";

export type HeaderProps = {
  title: React.ReactNode;
  back?: string;
};
const Header: React.FC<HeaderProps> = ({ title, back }) => {
  return (
    <header className={classes.root}>
      {!back && <SmallLogo />}
      {back && (
        <Link href={back} className={classes.back}>
          {"<"}
        </Link>
      )}
      <Typography variant="body" component="h1">
        {title}
      </Typography>
    </header>
  );
};

export default Header;
