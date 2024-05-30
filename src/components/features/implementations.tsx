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
                  <p>{projectUrl}</p>
                  <div>
                    <RichTextContent content={institutionAndPartners} />
                  </div>
                  <div>
                    <RichTextContent content={briefDescription} />
                  </div>
                  <div>
                    <RichTextContent content={mainFeatures} />
                  </div>
                </div>
              </Card>
            );
          })}
    </div>
  );
}
