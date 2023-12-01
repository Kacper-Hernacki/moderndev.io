import { notionApi } from "@/config";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Grid from "@/components/snippets/grid";
import React from "react";

export default async function AiPrompts() {
  const response: QueryDatabaseResponse = await notionApi.databases.query({
    database_id: "2923d241f0ab47b59a3034d0c482e940",
  });
 // https://www.notion.so/2923d241f0ab47b59a3034d0c482e940?v=491db287ec1e4c67a1ade8ab2a4e444e&pvs=4
  return (
    // @ts-ignore
    <Grid items={response?.results} title={"AI prompts"} />
  );
}

