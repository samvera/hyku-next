import BgLayer from "@/components/layout/bg-layer";
import HostedSolutions from "@/components/hosted-solutions";
import Image from "next/image";
import Link from "next/link";
import MainWrapper from "@/components/layout/main-wrapper";
import appScreenshot from "../../public/app-screenshot.png";

export default function Homepage() {
  return (
    <div className="">
      <MainWrapper>
        <BgLayer>
          <div className="py-24 sm:py-32 lg:pb-40 animate-fade-in">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground  sm:text-6xl">
                  The Next Generation Repository Solution
                </h1>
                <p className="mt-6 text-lg leading-8 text-foreground-muted">
                  Hyku is a digital repository that provides a robust and
                  flexible platform for institutions to manage and provide
                  access to digital content.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/getting-started" className="button-primary">
                    Get started
                  </Link>
                  <a
                    href="https://github.com/samvera/hyku"
                    className="text-sm font-semibold leading-6 text-foreground no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-foreground/5 p-2 ring-1 ring-inset ring-foreground/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src={appScreenshot}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-foreground/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </BgLayer>
      </MainWrapper>
    </div>
  );
}
