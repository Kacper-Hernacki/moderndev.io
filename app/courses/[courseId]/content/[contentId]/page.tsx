import { notion } from "@/config";
import { NotionPage } from "@/components";
import CompleteModule from "@/components/courses/completeModule";

async function getData(contentId: string) {
  return await notion.getPage(contentId);
}

export default async function CourseContent({ params }: { params: { contentId: string, courseId: string } }) {
  const { contentId, courseId } = params;
  const data = await getData(contentId);
  return (
    <div>
      <NotionPage rootPageId={contentId} recordMap={data} />
      <CompleteModule moduleId={courseId} moduleLessonId={contentId} />
    </div>
  );
};





