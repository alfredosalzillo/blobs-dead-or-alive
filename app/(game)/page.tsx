'use client';

import React from 'react';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import dynamic from 'next/dynamic';
import { useModal } from '@/plugins/modal-provider';
import { useRouter } from 'next/navigation';
import classes from './page.module.scss';

const InstructionsModal = dynamic(() => import('@/components/InstructionsModal'), { ssr: false });
const ComingSoonModal = dynamic(() => import('@/components/ComingSoonModal'), { ssr: false });
const useInstructionsModal = () => useModal('instructions');
const useComingSoonModal = () => useModal('coming-soon');

const HomePage = () => {
  const instructions = useInstructionsModal();
  const comingSoon = useComingSoonModal();
  const router = useRouter();
  return (
    <>
      <div className={classes.root}>
        <Logo />
        <Button fullWidth onClick={() => router.push('/rush')}>START GAME</Button>
        <Button fullWidth onClick={() => comingSoon.open()}>CAMPAIGN</Button>
        <Button fullWidth onClick={() => instructions.open()}>INSTRUCTIONS</Button>
        <Button fullWidth onClick={() => comingSoon.open()}>SETTINGS</Button>
      </div>
      <InstructionsModal open={instructions.opened} onContinue={() => instructions.close()} />
      <ComingSoonModal open={comingSoon.opened} onContinue={() => comingSoon.close()} />
    </>
  );
};

export default HomePage;
