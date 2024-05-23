import Container from "@/components/layout/container";
import Header from "@/components/layout/header";
import MainWrapper from "@/components/layout/main-wrapper";
import PageHeader from "@/components/page-header";

export default function Homepage() {
  return (
    <div className="">
      <Header />
      <MainWrapper>
        <PageHeader title="News and Events" description="Something here" />
        <Container>asdf</Container>
      </MainWrapper>
    </div>
  );
}
