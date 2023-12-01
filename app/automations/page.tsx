import { notionApi } from "@/config";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Grid from "@/components/snippets/grid";
import React from "react";

export default async function Automations() {
  const response: QueryDatabaseResponse = await notionApi.databases.query({
    database_id: "d51cfb13eb6f4c049794aaf7de561de4",
  });
  return (
    // @ts-ignore
    <Grid items={response?.results} title={"Automations"} />
  );
}
