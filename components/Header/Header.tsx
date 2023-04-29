import React from 'react';
import Link from 'next/link';

import SmallLogo from '@/components/SmallLogo';
import Typography from '@/components/Typography';

import classes from './Header.module.scss';

export type HeaderProps = {
  title: React.ReactNode;
  back?: boolean;
}
const Header: React.FC<HeaderProps> = ({ title, back }) => (
  <header className={classes.root}>
    {!back && <SmallLogo />}
    {back && <Link href="/" className={classes.back}>{'<'}</Link>}
    <Typography variant="body" component="h1">
      {title}
    </Typography>
  </header>
);

export default Header;
