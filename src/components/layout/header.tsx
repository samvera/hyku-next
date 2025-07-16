"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import hykuLogo from "../../../public/logo-hyku.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type NavItem = {
  href: string;
  isExternal?: boolean;
  name: string;
};

export const navigation: NavItem[] = [
  {
    name: "Features and Implementations",
    href: "/features",
  },
  {
    name: "Getting Started",
    href: "/getting-started",
  },
  {
    name: "Presentations and Demos",
    href: "/presentations",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Hyku</span>
            <Image src={hykuLogo} alt="Hyku logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Mobile nav bar */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground-muted"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-foreground hover:text-foreground/90"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://samvera.atlassian.net/wiki/spaces/hyku/overview"
            className="text-sm font-semibold leading-6 text-foreground hover:text-foreground/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        data-testid="mobile-menu"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={hykuLogo} alt="Hyku logo" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground-muted/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-foreground/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://github.com/samvera/hyku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-foreground/5"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
