import { NotionPage } from "@/components/notion/renderer";
import { notion } from "@/config";

const rootNotionPageId = "8ad7cca22ecb4c7bb4fafd94fd4bc7ba";

async function getData() {
  return await notion.getPage(rootNotionPageId);
}

export default async function Automations() {
  const data = await getData();
  return (
    <NotionPage recordMap={data} rootPageId={'baec03e3938449a4bdba3bca7be3e6b1'} />
  );
}

