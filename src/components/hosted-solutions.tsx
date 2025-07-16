import Container from "@/components/layout/container";

const hostedSolutions = [
  {
    name: "HykuUP",
    description: "by SoftServ by Scientist.com",
    url: "https://hykuup.com/",
  },
  {
    name: "Ubiquity Repositories",
    description: "by Ubiquity Press",
    url: "https://ubiquity.pub/repositories/",
  },
  {
    name: "Service Providers page",
    description:
      "For hosted solutions, Requests for Proposals, or contracted work",
    url: "https://samvera.org/the-community/service-providers",
  },
];

export default function HostedSolutions() {
  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2>Hosted Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-foreground-muted">
            Service providers offering hosted Hyku solutions and migration assistance. 
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {hostedSolutions.map((hs) => (
            <div key={hs.name}>
              <dt className="font-semibold text-foreground">{hs.name}</dt>
              <dd className="mt-1 text-foreground-muted flex flex-col space-y-4">
                <span>{hs.description}</span>
                <a
                  href={hs.url}
                  target="_blank"
                  rel=""
                  className="text-sm text-primary no-underline"
                >
                  {hs.url}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
