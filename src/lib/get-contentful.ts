import { createClient, type ContentfulClientApi } from "contentful";
import {
  createClient as createManagementClient,
  type PlainClientAPI,
} from "contentful-management";
import dotenv from "dotenv";

let client: ContentfulClientApi<undefined>;
let managementClient: PlainClientAPI;

function getContentful() {
  if (!client) {
    if (typeof window === "undefined") {
      dotenv.config();
    }

    if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
      throw new Error("Missing NEXT_PUBLIC_CONTENTFUL_SPACE_ID");
    }
    if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
      throw new Error("Missing NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN");
    }

    const accessToken: string = process.env
      .NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;
    const environment: string = "hyku";
    const space: string = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
    client = createClient({
      accessToken,
      environment,
      space,
    });
  }

  return client;
}

function getContentfulManagement() {
  if (!managementClient) {
    if (typeof window === "undefined") {
      dotenv.config();
    }

    if (!process.env.CONTENTFUL_CMA_TOKEN) {
      throw new Error("Missing CONTENTFUL_CMA_TOKEN");
    }
    if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
      throw new Error("Missing NEXT_PUBLIC_CONTENTFUL_SPACE_ID");
    }

    const accessToken: string = process.env.CONTENTFUL_CMA_TOKEN as string;
    const spaceId: string = process.env
      .NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
    // We are only managing the "hyku" environment with this client
    const environmentId: string = "hyku";

    managementClient = createManagementClient(
      {
        accessToken,
      },

      {
        type: "plain",
        defaults: {
          spaceId,
          environmentId,
        },
      },
    );
  }

  return managementClient;
}

export default getContentful;
export { getContentfulManagement };
