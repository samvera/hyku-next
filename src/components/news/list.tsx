"use client";

import { formatDate, sortDates } from "@/lib/format-date";

import RichTextContent from "../rich-text-content";
import Skeleton from "react-loading-skeleton";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import { getData } from "@/lib/get-contentful-data";
import { useQuery } from "@tanstack/react-query";

export default function NewsList() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["news"],
    queryFn: () => getData("newsItem"),
  });

  const sorted = data ? data.sort(sortDates("desc", "publishDate")) : [];

  if (isPending || isFetching) {
    return (
      <div className="mx-auto max-w-2xl">
        <Skeleton count={5} height={50} />
      </div>
    );
  }

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-16 border-t border-gray-200 pt-10 sm:pt-16">
            {sorted &&
              sorted.map(({ fields, sys }: { fields: any; sys: any }) => (
                <article
                  key={sys.id}
                  className="flex max-w-xl flex-col items-start justify-between animate-fade-in"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={fields.publishDate}
                      className="text-foreground-muted"
                    >
                      {formatDate(fields.publishDate)}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {fields.title}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-gray-600">
                      {/* <span className="absolute inset-0" /> */}
                      {fields.title}
                    </h3>
                    <RichTextContent content={fields.content} />
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <UserGroupIcon className="h-10 w-auto rounded-full bg-gray-50 text-gray-400" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold ">
                        <span>
                          <span className="absolute inset-0" />
                          {fields.author}
                        </span>
                      </p>
                      <p className="text-foreground-muted !mt-0">
                        Hyku Administrator
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
