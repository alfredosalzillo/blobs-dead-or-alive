'use client';

import type { User } from 'auth';

import Typography from '@/components/Typography';
import Button from '@/components/Button';
import signOut from 'auth/signOut';
import classes from '@/app/(game)/settings/page.module.scss';
import signInAnonymously from 'auth/signInAnonymously';
import signInWithGoogle from 'auth/signInWithGoogle';
import useAuth from 'auth/useAuth';

const getDisplayName = (user: User) => {
  if (user.isAnonymous) return 'Anonymous';
  if (user.displayName) return user.displayName;
  return 'Anonymous';
};

const AccountSettings = () => {
  const auth = useAuth();
  return (
    <div>
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

export default AccountSettings;
