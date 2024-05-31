"use client";

import Skeleton from "react-loading-skeleton";
import { getData } from "@/lib/get-contentful-data";
import { useQuery } from "@tanstack/react-query";

export default function FeatureList() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["features"],
    queryFn: () => getData("feature"),
  });

  return (
    <ul>
      {(isFetching || isPending) && <Skeleton count={5} />}

      {data &&
        data.map(({ fields, sys }: { fields: any; sys: any }) => (
          <li key={sys.id}>{fields.featureDescription}</li>
        ))}
    </ul>
  );
}
