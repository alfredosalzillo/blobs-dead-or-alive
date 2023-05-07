'use client';

import Logo from '@/components/Logo';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import signInAnonymously from 'auth/signInAnonymously';
import signInWithGoogle from 'auth/signInWithGoogle';

import classes from './SignInScreen.module.scss';

const SignInScreen = () => (
  <div className={classes.root}>
    <div className={classes.header}>
      <Logo />
    </div>
    <div className={classes.main}>
      <Typography variant="body" paragraph color="primary" align="center">
        You are not logged in.
        <br />
        Sign In to start hunting blobs!
      </Typography>
      <Button type="button" fullWidth onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
      <Typography variant="body" color="primary" align="center">
        or
      </Typography>
      <Button type="button" fullWidth onClick={signInAnonymously}>
        Sign In Anonymously
      </Button>
    </div>
  </div>
);

export default SignInScreen;
