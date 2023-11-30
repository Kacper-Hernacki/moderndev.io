import { notion, notionApi } from "@/config";
import { NotionPage } from "@/components";

const rootNotionPageId = "10478d70b16945cd90f452f6ef5891b7";
async function getData() {

  return await notion.getPage(rootNotionPageId);
}

export default async function Faq() {
  const faq = await getData();

  return (
    <NotionPage recordMap={faq} rootPageId={rootNotionPageId} />
  );
}
