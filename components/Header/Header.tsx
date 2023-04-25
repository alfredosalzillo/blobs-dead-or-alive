import React from 'react';
import SmallLogo from '@/components/SmallLogo';
import classes from './Header.module.scss';

export type HeaderProps = {
  title: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className={classes.root}>
    <SmallLogo />
    <span>
      {title}
    </span>
  </header>
);

export default Header;
