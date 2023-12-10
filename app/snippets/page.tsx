import { notionApi } from "@/config";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Grid from "@/components/lab/grid";
import React from "react";

export default async function Snippets() {
  const response: QueryDatabaseResponse = await notionApi.databases.query({
    database_id: "91d4868604d6401daf7626bf0cb45eb8",
 });

  return (
    // @ts-ignore
    <Grid items={response?.results} title={"Code Snippets"} linkCore="/snippets" />
  );
}
