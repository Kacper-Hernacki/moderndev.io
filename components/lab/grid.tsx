import React from "react";
import Card from "@/components/lab/card";

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
  items: Course[];
  title: string,
}
const Grid: React.FC<GridProps> = async ({ items,title }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-24 text-6xl lg:text-7xl gradient-span font-bold text-center">{title}</h1>
      <div className="flex flex-wrap">
        {items.map((course, index) => (
          <div key={index} className={`w-full sm:w-1/2 md:w-1/${items?.length < 3 ? items?.length : 3} lg:w-1/${items?.length < 4 ? items?.length : 4} px-2 mb-4`}>
          <Card course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;