import React from "react";
import Card from "@/components/courses/card";

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

interface GridProps {
  courses: Course[];
  title?: string;
}
const Grid: React.FC<GridProps> = ({ courses, title }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-24 text-7xl lg:text-6xl xl:text-7xl gradient-span font-bold text-center">{title ? title : `Courses`}</h1>
      <div className="flex flex-wrap">
        {courses.map((course, index) => (
          <div key={index} className={` w-full sm:w-1/2 md:w-1/3 lg:w-1/${courses?.length < 4 ? courses?.length : 4} px-2 mb-4n`}>
            <Card course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;