import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichTextContent = ({ content }: { content: any }) => {
  if (!content) return null;

  const options = {
    // Helper function to handle line breaks in rich text
    renderText: (text: string) => {
      return text.split("\n").reduce((children: any, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};

export default RichTextContent;
