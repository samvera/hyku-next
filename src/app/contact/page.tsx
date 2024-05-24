import Container from "@/components/layout/container";
import Header from "@/components/layout/header";
import MainWrapper from "@/components/layout/main-wrapper";

function ContactCard({
  title,
  email,
  url,
}: {
  title: string;
  email?: string;
  url?: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-50 dark:bg-gray-950 p-10">
      <h3 className="text-base font-semibold leading-">{title}</h3>
      <dl className="mt-3 space-y-1 text-sm leading-6 text-foreground-muted">
        <div>
          <dt className="sr-only">Email</dt>
          <dd>
            {email && (
              <a
                className="font-semibold text-primary"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            )}
            {url && (
              <a className="font-semibold text-primary" href={url}>
                {url}
              </a>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}

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
                      Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                      pellentesque.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                    <ContactCard title="Collborate" email="mail@test.com" />
                    <ContactCard
                      title="Hosted Solutions"
                      email="hosted@example.com"
                    />
                    <ContactCard
                      title="Developers"
                      email="careers@example.com"
                    />
                    <ContactCard
                      title="Slack"
                      email=""
                      url="http://slack.com"
                    />
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
