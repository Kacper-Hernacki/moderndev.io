import { NotionPage } from "@/components/notion/renderer";
import { notion } from "@/config";

const rootNotionPageId = "39baae7d4abc47dbaccac7549f48f027";

async function getData() {
  return await notion.getPage(rootNotionPageId);
}

export default async function AiPrompts() {
  const data = await getData();
  return (
    <NotionPage recordMap={data} rootPageId={'baec03e3938449a4bdba3bca7be3e6b1'} />
  );
}

