import Image from "next/image";
import Moderndev from "@/public/avatars/md.png";
import { NotionPage } from "@/components";
import { notion } from "@/config";

const rootPageId = "7464bd6440164551accaf98e1a018a2d";

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}
export default async function About() {
  const recordMap = await getData(rootPageId);

  return (
    <div className="flex-col justify-center">
      <h1 className="mb-24 text-5xl font-bold text-center gradient-span">
        About
      </h1>
      <NotionPage recordMap={recordMap} rootPageId={rootPageId} />
    </div>
  );
}
