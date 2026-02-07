import Header from "@/components/Header";
import StageGame from "@/components/StageGame";

export const generateStaticParams = () => [{ stage: "1" }];

export const dynamicParams = false;
type StagePageProps = { params: Promise<{ stage: string }> };
const StagePage = async ({ params }: StagePageProps) => {
  const { stage } = await params;
  const data = await import(`@/campaign/stage-${stage}.json`);
  return (
    <>
      <Header title={`STAGE ${stage}`} />
      <StageGame stage={data.default} />
    </>
  );
};
export default StagePage;
