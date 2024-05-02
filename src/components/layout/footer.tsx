"use client";

import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import ThemeSwitch from "./theme-switch";
import { navigation } from "@/components/layout/header";

const navigationExtended = [
  ...navigation,
  {
    name: "Learn More",
    href: "/learn-more",
  },
];

const socials = [
  {
    name: "X",
    href: "#",
    icon: TwitterLogoIcon,
  },
  {
    name: "GitHub",
    href: "#",
    icon: GitHubLogoIcon,
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
                className="text-sm leading-6 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
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
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Hyku. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
