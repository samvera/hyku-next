import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichTextContent = ({ content }: { content: any }) => {
  if (!content) return null;
  return <>{documentToReactComponents(content)}</>;
};

export default RichTextContent;
