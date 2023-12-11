import React from "react";
import { notionApi } from "@/config";
import Grid from "@/components/courses/grid";
import {  QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";


export default async function TagsItems({ params }: {
  params: { tagName: string },
}): Promise<JSX.Element> {
  const { tagName } = params;

  const response: QueryDatabaseResponse = await notionApi.databases.query({
    database_id: process.env.COURSES_NOTION_DATABASE_ID as string,
  });

  const publishedCourses = response.results.filter((course) => {
    if ('properties' in course) {
      const publishedProperty = course.properties.Published;
      const tagsProperty = course.properties.Tags;

      return publishedProperty?.type === 'checkbox' &&
        publishedProperty?.checkbox &&
        tagsProperty?.type === 'multi_select' &&
        // @ts-ignore
        tagsProperty?.multi_select?.some(tag => tag.name === tagName);
    }
    return false;
  });



  // @ts-ignore
  return <Grid courses={publishedCourses} title={`#${tagName}`}/>;
}
