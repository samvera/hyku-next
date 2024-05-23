import Container from "@/components/layout/container";
import Header from "@/components/layout/header";
import MainWrapper from "@/components/layout/main-wrapper";
import NewsList from "@/components/news/list";
import PageHeader from "@/components/page-header";

export default function Homepage() {
  return (
    <div className="">
      <Header />
      <MainWrapper>
        <PageHeader
          title="News and Events"
          description="Keep up with the latest news and events in the Hyku ecosystem"
        />
        <Container>
          <NewsList />
        </Container>
      </MainWrapper>
    </div>
  );
}
