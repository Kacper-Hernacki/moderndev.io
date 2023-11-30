import { notion } from "@/config";
import { NotionPage } from "@/components";

const rootPageId = "422020d94d294b2ebeaa9f92a40f7457";
async function getData(rootPageId:string) {
  return await notion.getPage(rootPageId);
}
export default async function Cookies() {
  const data = await getData(rootPageId);
  return (
    <NotionPage recordMap={data} rootPageId={rootPageId} />
  );
}
