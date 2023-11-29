import { NotionPage } from "@/components/notion/renderer";
import { notion } from "@/config";


const rootNotionPageId = "ba76656e2eb6469b921e5ef135e44114";

async function getData() {
  return await notion.getPage(rootNotionPageId);
}

export default async function Snippets() {
  const data = await getData();
  return (
    <NotionPage recordMap={data} rootPageId={'baec03e3938449a4bdba3bca7be3e6b1'} />
  );
}

