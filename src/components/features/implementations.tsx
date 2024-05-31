"use client";

import Card from "@/components/card";
import RichTextContent from "../rich-text-content";
import Skeleton from "react-loading-skeleton";
import useGetContentfulData from "@/hooks/use-get-contentful-data";

export default function Implementations() {
  const data = useGetContentfulData("integration");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {!data
        ? [...Array(4)].map((_, i) => <Skeleton key={i} height={240} />)
        : data.map((item: any) => {
            const {
              fields: {
                briefDescription,
                institutionAndPartners,
                mainFeatures,
                productname,
                projectUrl,
              },
            } = item;

            return (
              <Card key={item.sys.id}>
                <div className="space-y-3">
                  <h3>{productname}</h3>
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block"
                  >
                    {projectUrl}
                  </a>
                  <dl className="pt-4">
                    <dt>Institutional Partners</dt>
                    <dd>
                      <RichTextContent content={institutionAndPartners} />
                    </dd>
                    <dt>Brief Description</dt>
                    <dd>
                      <RichTextContent content={briefDescription} />
                    </dd>
                    <dt>Main Features</dt>
                    <dd>
                      <RichTextContent content={mainFeatures} />
                    </dd>
                  </dl>
                </div>
              </Card>
            );
          })}
    </div>
  );
}
