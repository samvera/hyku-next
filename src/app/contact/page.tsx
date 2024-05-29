import ContactCard from "@/components/contact/card";
import Container from "@/components/layout/container";
import Header from "@/components/layout/header";
import MainWrapper from "@/components/layout/main-wrapper";

const contactCards = [
  {
    description:
      "An open and welcoming forum to find out what is in development for Hyku and to connect with users with similar needs.",
    title: "Hyku Interest Group",
    url: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/419533203/Samvera+Hyku+Interest+Group",
  },
  {
    description: "Have a PR to contribute?",
    title: "Developers",
    url: "https://github.com/samvera/hyku",
  },
  {
    description:
      "Request to join Samvera's slack workspace and join the #hyku channel. Introduce yourself and ask questions!",
    title: "Samvera Slack",
    email: "",
    url: "https://samvera.atlassian.net/wiki/spaces/samvera/pages/405211682/Getting+Started+in+the+Samvera+Community#Join-the-Samvera-Slack-workspace",
  },
  {
    title: "Email",
    email: "info@samvera.org",
    description:
      "Email Us with questions, requests for demos, and other communications.",
  },
];

export default function ContactPage() {
  return (
    <div className="">
      <Header />
      <MainWrapper>
        <Container>
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 dark:divide-gray-900 lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">
                      Get in touch
                    </h2>
                    <p className="mt-4 leading-7 text-foreground-muted">
                      As part of the Samvera Community, Hyku is driven by the
                      participation of users and developers. There are many ways
                      to contribute, collaborate, or just get some questions
                      answered as you get started with Hyku.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    {contactCards.map((card, index) => (
                      <ContactCard key={index} {...card} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </MainWrapper>
    </div>
  );
}
