import getContentful from "@/lib/get-contentful";

const client = getContentful();

export async function getData(contentType: string) {
  try {
    const data = await client.getEntries({
      content_type: contentType,
    });
    console.log("data", data);
    return data.items;
  } catch (error) {
    console.error(`Error fetching ${contentType} data from Contentful`, error);
  }
}
