import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";

export const notion = new NotionAPI({
});

export const notionApi = new Client({
  auth: process.env.NOTION_TOKEN,
})
