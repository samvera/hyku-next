import BgLayer from "@/components/layout/bg-layer";
import Container from "@/components/layout/container";
import GettingStartedList from "@/components/getting-started/list";
import Header from "@/components/layout/header";
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
            <GettingStartedList />
            <section className="mt-16 sm:mt-20 lg:mt-24">
              <h2>F.A.Q. Frequently Asked Questions</h2>
            </section>
          </Container>
        </MainWrapper>
      </BgLayer>
    </div>
  );
}
