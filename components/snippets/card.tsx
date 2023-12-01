import React from "react";
import Link from "next/link";
import extractIdFromUrl from "@/utils/notion";

interface Tag {
  id: string;
  name: string;
  color: string;
}
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
  properties: {
    Tags?: {
      multi_select: Tag[];
    },
    Name?: any;
    Description?: any
  };
  url: string;
  public_url: string;
}
interface CardProps {
  course: Course;
}

const renderColor = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    blue: 'bg-blue-500',
  };

  return colorMap[color] || 'bg-gray-500';
}

const Card: React.FC<CardProps> = async ({ course }) => {
  const { id, cover, created_time, last_edited_time, properties, public_url } = course;
  const title = properties?.Name?.title[0]?.plain_text;
  const description = properties?.Description?.rich_text[0]?.plain_text;
  const courseId = extractIdFromUrl(public_url);
  const tags = properties?.Tags?.multi_select;

  return (
    <div className="card lg:w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={cover?.file?.url} alt={title} className="w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="mt-4">
          {tags?.map(tag => (
            <span key={tag.id} className={`my-1 badge badge-lg text-gray-800 font-bold ${renderColor(tag.color)} mr-2`}>{tag.name}</span>
          ))}
        </div>
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