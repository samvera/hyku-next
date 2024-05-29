"use client";

import { useEffect, useState } from "react";

import getContentful from "@/lib/get-contentful";

export default function useGetContentfulData(contentType: string) {
  const [data, setData] = useState<any>(null);
  const client = getContentful();

  useEffect(() => {
    if (!client || !contentType) return;

    client
      .getEntries({
        content_type: contentType,
      })
      .then((response) => {
        setData(response.items);
      })
      .catch((error) => {
        console.error("Error fetching data from Contentful", error);
      });
  }, [client, contentType]);

  return data;
}
