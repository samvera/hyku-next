"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import RichTextContent from "./rich-text-content";
import useGetContentfulData from "@/hooks/use-get-contentful-data";

export default function FaqList() {
  const data = useGetContentfulData("faq");

  return (
    <div className="">
      <div className="mx-auto max-w-4xl divide-y divide-foreground/10">
        <dl className="mt-10 space-y-6 divide-y divide-foreground/10">
          {data &&
            data.map(({ fields, sys }: { fields: any; sys: any }) => (
              <Disclosure as="div" key={sys.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-foreground">
                        <span className="text-base font-semibold leading-7">
                          {fields.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <div className="text-base leading-7 text-foreground-muted">
                        <RichTextContent content={fields.answer} />
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
        </dl>
      </div>
    </div>
  );
}
