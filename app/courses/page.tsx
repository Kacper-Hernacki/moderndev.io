import React from "react";
import { notionApi } from "@/config";
import Grid from "@/components/courses/grid";
import { DatabaseObjectResponse, PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";


export default async function Courses(): Promise<JSX.Element> {
  const response: QueryDatabaseResponse = await notionApi.databases.query({
    database_id: process.env.COURSES_NOTION_DATABASE_ID as string,
  });

    const publishedCourses: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)[] = response.results.filter((course): (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse) =>
      // @ts-ignore
      course?.properties?.Published && course?.properties?.Published.checkbox,
    );

  // @ts-ignore
  return <Grid courses={publishedCourses} />;
}
