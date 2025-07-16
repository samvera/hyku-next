import BgLayer from "@/components/layout/bg-layer";
import Container from "@/components/layout/container";
import MainWrapper from "@/components/layout/main-wrapper";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import PresentationsList from "@/components/presentations/list";

export const metadata: Metadata = {
  title: "Presentations and Demos",
  description: "View presentations and demos about Hyku and its ecosystem.",
};

export default function PresentationsPage() {
  return (
    <div className="">
      <MainWrapper>
        <BgLayer>
          <PageHeader
            title="Presentations and Demos"
            description="In addition to the archived presentation below, useful Hyku feature demos can be found on YouTube."
          >
            <div className="mt-8 flex-row space-x-4">
              <a
                href="https://www.youtube.com/@samveracommunity6617"
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary"
              >
                Samvera YouTube Channel
              </a>
              <a
                href="https://www.youtube.com/@samveracommunity6617"
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
