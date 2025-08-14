"use client";

import { formatDate, sortDates } from "@/lib/format-date";

import Skeleton from "react-loading-skeleton";
import { getData } from "@/lib/get-contentful-data";
import { useQuery } from "@tanstack/react-query";

export default function PresentationsList() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["presentation"],
    queryFn: () => getData("presentation"),
  });

  let sorted = data ? data.sort(sortDates("desc", "publishedDate")) : [];
  let mapped = sorted.map(({ fields, sys }: { fields: any; sys: any }) => {
    let fieldsCopy: any = { ...fields };
    // I am not certain why this was required. Perhaps the content models were updated but not for all Presentations?
    if (!fieldsCopy.speakers) {
      fieldsCopy.speakers = [];
    }
    if (!fieldsCopy.date) {
      console.warn(
        `Missing date for presentation ${sys.id}, using sys.createdAt instead`,
      );
      fieldsCopy.date = new Date(sys.createdAt).toISOString();
    }
    const output: any = { fields: fieldsCopy, sys };

    return output;
  });

  return (
    <ul role="list" className="list-none ml-0 divide-y divide-gray-100 ">
      {(isFetching || isPending) && <Skeleton count={5} height={50} />}
      {mapped.length > 0 &&
        mapped.map(({ fields, sys }: { fields: any; sys: any }) => (
          <li
            key={sys.id}
            className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-start w-full py-6 animate-fade-in"
          >
            <div className="space-y-2">
              <a href={fields.url || "#"} className="font-semibold text-xl">
                {fields.title}
              </a>
              <div className="flex space-x-3 items-center">
                <span>{formatDate(fields.date)}</span>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <span>{fields.speakers.join(", ")}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div>{fields.conference}</div>
              {fields.online && (
                <div className="mt-1 flex items-center justify-start md:justify-end gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-xs leading-5 text-foreground-muted">
                    Online
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
}
