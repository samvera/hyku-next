"use client";

import Skeleton from "react-loading-skeleton";
import useGetContentfulData from "@/hooks/use-get-contentful-data";

export default function FeatureList() {
  const data = useGetContentfulData("feature");

  return (
    <ul>
      {!data && <Skeleton count={5} />}

      {data &&
        data.map(({ fields, sys }: { fields: any; sys: any }) => (
          <li key={sys.id}>{fields.featureDescription}</li>
        ))}
    </ul>
  );
}
