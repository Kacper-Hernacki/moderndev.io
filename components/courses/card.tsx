import React from "react";
import Link from "next/link";
import extractIdFromUrl from "@/utils/notion";

interface CreatedBy {
}

interface Cover {
}

interface Course {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy | any;
  last_edited_by: CreatedBy | any;
  cover: Cover | any;
  icon: any;
  parent: any;
  archived: boolean;
  properties: any;
  url: string;
  public_url: string;
}
interface CardProps {
  course: Course;
}
const Card: React.FC<CardProps> = async ({ course }) => {
  const { id, cover, created_time, last_edited_time, properties, public_url } = course;
  const title = properties?.Name?.title[0]?.plain_text;
  const description = properties?.Description?.rich_text[0]?.plain_text;
  const courseId = extractIdFromUrl(public_url);
  console.log('🚀 ',properties?.Tags?.multi_select)
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure><img src={cover?.file?.url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/courses/${courseId}`}>
            <button className="btn btn-primary">Start Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;