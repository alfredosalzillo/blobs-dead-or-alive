"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
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
      <div className={classes.legal}>
        <Typography variant="h2" color="primary">
          Legal
        </Typography>
        <Typography variant="body" paragraph>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <br />
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </Typography>
      </div>
    </div>
  </>
);

export default SettingsPage;
