"use client";

import dynamic from "next/dynamic";
import classes from "./page.module.scss";
import Header from "@/components/Header";
import Typography from "@/components/Typography";

const AccountSettings = dynamic(() => import("./AccountSettings"), {
  ssr: false,
  loading: () => (
    <Typography variant="body" paragraph>
      Loading...
    </Typography>
  ),
});

const SettingsPage = () => (
  <>
    <Header title="Settings" back />
    <div className={classes.root}>
      <div>
        <Typography variant="h2" color="primary">
          Game
        </Typography>
        <Typography variant="body" paragraph>
          Coming soon...
        </Typography>
      </div>
      <div>
        <Typography variant="h2" color="primary">
          General
        </Typography>
        <Typography variant="body" paragraph>
          Coming soon...
        </Typography>
      </div>
      <div>
        <Typography variant="h2" color="primary">
          Account
        </Typography>
        <AccountSettings />
      </div>
    </div>
  </>
);

export default SettingsPage;
