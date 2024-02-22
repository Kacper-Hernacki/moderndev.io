import { notion, notionApi } from "@/config";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import Grid from "@/components/snippets/grid";

async function getData(courseId: string) {
  return await notion.getPage(courseId);
}

function replaceUnderscoresWithSpaces(str: string) {
  return str?.replace(/_/g, " ");
}

export default async function CoursePage({ params, searchParams }: {
  params: { courseId: string },
  searchParams: { title: string }
}) {
  const { courseId } = params;
  const data = await getData(courseId);
  const title = searchParams?.title;

  const collectionViewIds = Object.entries(data?.block)
    .filter(([key, entry]) => entry?.value?.type === "collection_view" && entry?.value?.id.replace(/-/g, "") !== process.env.COURSES_NOTION_DATABASE_ID)
    .map(([key, entry]) => entry.value.id);

  const response: QueryDatabaseResponse = await notionApi.databases.query({
    database_id: collectionViewIds[0],
  });
  const idsOfAllCourses = response?.results?.map((item) => item.id);

  // @ts-ignore
  return <Grid courseId={courseId} linkCore={`/courses/${courseId}`} items={response?.results.reverse()} title={replaceUnderscoresWithSpaces(title)} coursesProgressEnabled={true} idsOfAllCourses={idsOfAllCourses} />;
}
