import { notion } from "@/config";
import { NotionPage } from "@/components";

const rootPageId = "7bfed669c71849fa8bb7c03696638216";
async function getData(rootPageId:string) {
  return await notion.getPage(rootPageId);
}

export default async function Privacy() {
  const data = await getData(rootPageId);
  return (
    <NotionPage recordMap={data} rootPageId={rootPageId} />
  );
}

