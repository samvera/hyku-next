import { createClient, type ContentfulClientApi } from "contentful";

let client: ContentfulClientApi<undefined>;

function getContentful() {
  if (!client) {
    client = createClient({
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
      environment: "hyku" as string,
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    });
  }

  return client;
}

export default getContentful;
