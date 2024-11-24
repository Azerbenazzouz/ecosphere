import Hero from "@/components/HomePage/Hero";
import ImpactStatistics from "@/components/HomePage/ImpactStatistics";
import OurServices from "@/components/HomePage/OurServices";
import ProblemStatement from "@/components/HomePage/ProblemStatement";
import SolutionOverview from "@/components/HomePage/SolutionOverview";
import Subscription from "@/components/HomePage/Subscription";
import TeamPresentation from "@/components/HomePage/TeamPresentation";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <ProblemStatement />
      <SolutionOverview />
      <OurServices />
      <ImpactStatistics />
      <Subscription />
      <TeamPresentation />
    </div>
  );
}
