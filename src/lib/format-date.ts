export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 *
 * @param data Contentful CMS data
 * @param order
 * @returns
 */
export function sortDates(order: string = "desc", field: string) {
  return (a: any, b: any) => {
    const dateA = new Date(a.fields[field]);
    const dateB = new Date(b.fields[field]);
    return dateA && dateB
      ? order === "asc"
        ? Number(dateA) - Number(dateB)
        : Number(dateB) - Number(dateA)
      : 0;
  };
}
