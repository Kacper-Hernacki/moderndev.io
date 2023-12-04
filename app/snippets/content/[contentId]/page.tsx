import { notion } from "@/config";
import { NotionPage } from "@/components";

async function getData(contentId: string) {
  return await notion.getPage(contentId);
}

export default async function SnippetsContent({ params }: { params: { contentId: string } }) {
  const { contentId } = params;
  const data = await getData(contentId);

  return (
    <div>
      <NotionPage rootPageId={contentId} recordMap={data} />
    </div>
  );
};





