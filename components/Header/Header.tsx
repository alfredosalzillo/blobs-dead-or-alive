'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import SmallLogo from '@/components/SmallLogo';
import Typography from '@/components/Typography';

import classes from './Header.module.scss';

export type HeaderProps = {
  title: React.ReactNode;
  back?: boolean;
}
const Header: React.FC<HeaderProps> = ({ title, back }) => {
  const router = useRouter();
  return (
    <header className={classes.root}>
      {!back && <SmallLogo />}
      {back && (
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
        className={classes.back}
      >
        {'<'}
      </Link>
      )}
      <Typography variant="body" component="h1">
        {title}
      </Typography>
    </header>
  );
};

export default Header;
