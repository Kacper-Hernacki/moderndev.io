import Link from "next/link";
import React from "react";
import { DatabaseObjectResponse, PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { notionApi } from "@/config";
import extractIdFromUrl from "@/utils/notion";

interface Tag {
  name: string;
  color: string;
}

interface CourseProperties {
  Name?: {
    title: Array<{ text: { content: string } }>;
  };
  Tags?: {
    multi_select: Tag[];
  };
}

interface Course {
  public_url: string;
  properties: CourseProperties;
}

interface TagDetail {
  id: string | null;
  tagName: string;
  courseName: string;
  renderedColor: string;
}

interface GroupedTags {
  [key: string]: TagDetail[];
}
const renderColor = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
  };

  return colorMap[color] || "bg-gray-500";
};

export default async function Tags() {
  const response: QueryDatabaseResponse = await notionApi.databases.query({
    database_id: process.env.COURSES_NOTION_DATABASE_ID as string,
  });

  const publishedCourses: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)[] = response.results.filter((course): (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse) =>
    // @ts-ignore
    course?.properties?.Published && course?.properties?.Published.checkbox,
  );

  const courseDetails: TagDetail[] = publishedCourses.flatMap((course: any) => {
    const courseTyped = course as Course;
    const id = extractIdFromUrl(course.public_url);

    if (id === null) {
      return [];
    }

    return course.properties.Tags?.multi_select.map((tag: Tag) => ({
      id,
      tagName: tag.name,
      renderedColor: renderColor(tag.color),
    })) || [];
  });

  const groupedTags: GroupedTags = courseDetails.reduce((acc: GroupedTags, tag: TagDetail) => {
    if (!acc[tag.tagName]) {
      acc[tag.tagName] = [];
    }

    acc[tag.tagName].push(tag);

    return acc;
  }, {});

  const tagList = Object.entries(groupedTags).map(([tagName, tags]) => {
    const renderedColor = tags[0]?.renderedColor;

    return {
      tagName,
      renderedColor,
    };
  });


  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-5xl gradient-span font-bold text-center">Tags</h1>
      <h3 className="font-bold text-center mb-12">For the content you are looking for</h3>
      <div className="flex flex-wrap">
        {tagList?.map((tagList,index) =>{
          return(
            <Link key={index} href={`tags/${tagList?.tagName}`}>
              <div className={`m-2 p-4 rounded-2xl text-base-100 font-bold ${tagList?.renderedColor}`}>#{tagList?.tagName}</div>
            </Link>
          )
        })}
      </div>
    </div>

  );
}
