import { notion } from "@/config";
import { NotionPage } from "@/components";

async function getData(courseId:string) {
  return await notion.getPage(courseId);
}

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  const { courseId } = params;
  const data = await getData(courseId);

  return <NotionPage recordMap={data} rootPageId={courseId} />;
}