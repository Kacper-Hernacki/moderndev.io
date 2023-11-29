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
  // const data = await getData();
  //console.log('🚀 ',courses?.results[0]?.properties?.Name?.title[0]?.text)
  // return (
  //   <NotionPage recordMap={data} rootPageId={"baec03e3938449a4bdba3bca7be3e6b1"} />
  // );
  // @ts-ignore
  return <Grid courses={courses?.results}/>
}


