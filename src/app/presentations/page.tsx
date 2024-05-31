import BgLayer from "@/components/layout/bg-layer";
import Container from "@/components/layout/container";
import Header from "@/components/layout/header";
import MainWrapper from "@/components/layout/main-wrapper";
import PageHeader from "@/components/page-header";
import PresentationsList from "@/components/presentations/list";

export default function PresentationsPage() {
  return (
    <div className="">
      <Header />
      <MainWrapper>
        <BgLayer>
          <PageHeader
            title="Presentations and Demos"
            description="In addition to the archived presentation below, useful Hyku feature demos can be found on YouTube."
          >
            <div className="mt-8 flex-row space-x-4">
              <a
                href="https://www.youtube.com/channel/UC_m1Ovaaasa2ksyGaqz5i0Q/"
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary"
              >
                Hyku YouTube Channel
              </a>
              <a
                href="https://www.youtube.com/channel/UC1eopKtm-k_f93RTfzHSvMQ"
                target="_blank"
                rel="noreferrer noopener"
                className="button"
              >
                Hydra-in-a-Box (early demos)
              </a>
            </div>
          </PageHeader>
          <Container>
            <PresentationsList />
          </Container>
        </BgLayer>
      </MainWrapper>
    </div>
  );
}
