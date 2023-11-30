import { notion } from "@/config";
import { NotionPage } from "@/components";

const rootPageId = "866d5679901045c98c6d5be4bc36323e";

async function getData(rootPageId:string) {
  return await notion.getPage(rootPageId);
}
export default async function Terms() {
  const data = await getData(rootPageId);
  return (
    <NotionPage recordMap={data} rootPageId={rootPageId} />
  );
}
