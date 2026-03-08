import Header from "@/components/Header";
import StageGame from "@/components/StageGame";

export const generateStaticParams = () =>
  Array.from({ length: 10 }, (_, i) => ({ stage: (i + 1).toString() }));

export const dynamicParams = false;
type StagePageProps = { params: Promise<{ stage: string }> };
const StagePage = async ({ params }: StagePageProps) => {
  const { stage } = await params;
  const data = await import(`@/campaign/stage-${stage}.json`);
  return (
    <>
      <Header title={`STAGE ${stage}`} back />
      <StageGame
        stage={data.default}
        stageNumber={Number.parseInt(stage, 10)}
      />
    </>
  );
};
export default StagePage;
