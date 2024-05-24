"use client";

import { GitHub, Twitter, Youtube } from "react-feather";

import ThemeSwitch from "@/components/theme-switch";
import { navigation } from "@/components/layout/header";

const navigationExtended = [
  ...navigation,
  {
    name: "Learn More",
    href: "https://github.com/samvera/hyku",
    isExternal: true,
  },
];

const socials = [
  {
    name: "X",
    href: "http://twitter.com/HykuRepo",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/samvera/hyku",
    icon: GitHub,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC_m1Ovaaasa2ksyGaqz5i0Q",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigationExtended.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-foreground/90 hover:text-foreground"
                {...(item.isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center items-center space-x-10">
          <ThemeSwitch />
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground-muted/90 hover:text-foreground-muted"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-foreground-muted">
          &copy; 2024 Hyku. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
