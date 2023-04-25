import Header from '@/components/Header';
import React from 'react';
import StageGame from '@/components/StageGame';

export const generateStaticParams = () => ([
  { stage: '1' },
]);

export const dynamicParams = false;
type StagePageProps = { params: { stage: string} }
const StagePage = async ({ params: { stage } }: StagePageProps) => {
  const data = await import((`@/campaign/stage-${stage}.json`));
  return (
    <>
      <Header title={`STAGE ${stage}`} />
      <StageGame stage={data.default} />
    </>
  );
};
export default StagePage;
