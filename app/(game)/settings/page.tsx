'use client';

import type { User } from 'auth';

import useAuth from 'auth/useAuth';
import Button from '@/components/Button';
import signInAnonymously from 'auth/signInAnonymously';
import signInWithGoogle from 'auth/signInWithGoogle';
import signOut from 'auth/signOut';
import Typography from '@/components/Typography';
import Header from '@/components/Header';

import classes from './page.module.scss';

const getDisplayName = (user: User) => {
  if (user.isAnonymous) return 'Anonymous';
  if (user.displayName) return user.displayName;
  return 'Anonymous';
};

const AccountSettings = () => {
  const auth = useAuth();
  return (
    <div>
      <Typography variant="h2" color="primary">Account</Typography>
      {!auth.ready && (
        <Typography variant="body" paragraph>
          Loading...
        </Typography>
      )}
      {auth.ready && auth.user && (
        <div>
          <Typography variant="body" paragraph>
            Logged in as
            {' '}
            {getDisplayName(auth.user)}
            {' '}
            {auth.user.email && (
            <span>
              (
                {auth.user.email}
              )
            </span>
            )}
            .
          </Typography>
          <Button type="button" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      )}
      {auth.ready && !auth.user && (
        <div className={classes.signIn}>
          <Typography variant="body" paragraph>
            You are not logged in.
            {' '}
            <br />
            Create an account to save your progress.
          </Typography>
          <Button type="button" fullWidth onClick={signInAnonymously}>
            Sign In Anonymously
          </Button>
          <Button type="button" fullWidth onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      )}
    </div>
  );
};

const SettingsPage = () => (
  <>
    <Header title="Settings" back />
    <div className={classes.root}>
      <div>
        <Typography variant="h2" color="primary">Game</Typography>
        <Typography variant="body" paragraph>
          Coming soon...
        </Typography>
      </div>
      <div>
        <Typography variant="h2" color="primary">General</Typography>
        <Typography variant="body" paragraph>
          Coming soon...
        </Typography>
      </div>
      <AccountSettings />
    </div>
  </>
);

export default SettingsPage;
