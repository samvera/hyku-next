import BgLayer from "@/components/layout/bg-layer";
import Container from "@/components/layout/container";
import FaqList from "@/components/faq";
import GettingStartedList from "@/components/getting-started/list";
import Header from "@/components/layout/header";
import HostedSolutions from "@/components/hosted-solutions";
import MainWrapper from "@/components/layout/main-wrapper";
import PageHeader from "@/components/page-header";

export default function GettingStartedPage() {
  return (
    <div className="">
      <Header />
      <BgLayer>
        <MainWrapper>
          <PageHeader
            title="Getting Started"
            description="There are many resource for newcomers to Hyku and contributors to the community."
          />
          <Container>
            <div className="space-y-16">
              <GettingStartedList />
              <HostedSolutions />
              <section className="mt-16 sm:mt-20 lg:mt-24">
                <h2>F.A.Q. Frequently Asked Questions</h2>
                <FaqList />
              </section>
            </div>
          </Container>
        </MainWrapper>
      </BgLayer>
    </div>
  );
}
