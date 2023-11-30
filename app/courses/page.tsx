import React from "react";
import { NotionPage } from "@/components";
import { notion, notionApi } from "@/config";
import Grid from "@/components/courses/grid";


const rootNotionPageId = "6ed4abe386b84040ad06ee535fbb47c4";
async function getData() {

  return await notion.getPage(rootNotionPageId);
}
export default async function Courses() {
  const courses = await notionApi.databases.query({
    database_id: process.env.COURSES_NOTION_DATABASE_ID as string,
  })

  // @ts-ignore
  return <Grid courses={courses?.results}/>
}


