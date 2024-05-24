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
        <PageHeader
          title="Presentations and Demos"
          description="Something here"
        />
        <Container>
          <PresentationsList />
        </Container>
      </MainWrapper>
    </div>
  );
}
