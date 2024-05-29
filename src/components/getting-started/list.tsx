import {
  ChatBubbleBottomCenterIcon,
  CodeBracketSquareIcon,
  DocumentTextIcon,
  HomeModernIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Hyku User Documentation",
    description:
      "The Hyku user documentation explains more about Hyku and its features, including an in-depth user orientation.",
    href: "https://samvera.atlassian.net/wiki/spaces/hyku/overview?homepageId=715789904",
    icon: DocumentTextIcon,
  },
  {
    name: "Hyku Developers",
    description:
      "As an open source software solution, Hyku's code is freely available on Github. The ReadMe includes information on setting up your environment, deploying the application, and running the stack.",
    href: "https://github.com/samvera/hyku?tab=readme-ov-file#readme",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Current Releases and Features",
    description:
      "The Hyku release notes are kept up to date with new and pending release details, including new features, bug fixes, and component updates.",
    href: "https://github.com/samvera/hyku/releases",
    icon: RocketLaunchIcon,
  },
  {
    name: "Hyku vs. Hyrax",
    description:
      "Hyrax is a Samvera Community Rails engine that creates a repository application. Hyku is the polished, turn-key repository solution built on Hyrax. Hyku offers the functionality of Hyrax in a ready-to-use application, while Hyrax can often be a better choice for repositories that require significant customization. Read more about the differences between Hyrax and Hyku in the Hyku Documentation.",
    href: "https://samvera.atlassian.net/wiki/spaces/hyku/pages/718084040/Hyku+and+Hyrax+How+are+they+related+and+how+are+they+different",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Glossary",
    description: "Visit glossary documentation",
    href: "https://samvera.atlassian.net/wiki/spaces/hyku/pages/2243952642/Glossary",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Samvera",
    description:
      "Hyku is a solution of the Samvera Community. Learn more about Samvera at samvera.org.",
    href: "https://samvera.org",
    icon: HomeModernIcon,
  },
];

export default function GettingStartedList() {
  return (
    <div className="mx-auto max-w-2xl  lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col">
            <dt className="text-base font-semibold leading-7 text-foreground">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <feature.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-foreground-muted">
              <p className="flex-auto">{feature.description}</p>
              <p className="mt-6">
                <a
                  href={feature.href}
                  className="text-sm font-semibold leading-6 text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
