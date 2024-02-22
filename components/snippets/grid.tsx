"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/snippets/card";
import { collection, getDocs } from "@firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface CreatedBy {
}

interface Cover {
}

interface Item {
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
  items: Item[];
  title: string;
  linkCore: string;
  coursesProgressEnabled?: boolean;
  courseId: string;
}

const Grid: React.FC<GridProps> = async ({ title, items, linkCore, coursesProgressEnabled, courseId }) => {
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchLessons = async () => {
      setIsLoading(true);

      if (session?.user?.id) {
        // @ts-ignore
        const lessonsColRef = collection(db, "users", session.user.id, "course_progress", courseId, "lessons");
        const querySnapshot = await getDocs(lessonsColRef);
        const lessonsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          // @ts-ignore
          ...doc.data(),
        }));
        // @ts-ignore
        setLessons(lessonsData);
      }

      setIsLoading(false);
    };

    fetchLessons();
  }, [session, courseId]);

  const tasksCompleted = lessons?.length;
  const tasksRemaining = items.length - lessons?.length;
  const numberOfModules = items?.length;
  const progress = Math.floor((tasksCompleted * 100) / numberOfModules);

  // @ts-ignore
  const lessonsIds = lessons?.map(lesson => lesson?.id);

  function isLessonCompleted(lessonId: string) {
    return lessonsIds?.some((id) => lessonId === id);
  }

  return (
    <div className="flex flex-col justify-center p-4 lg:p-8">
      <button className="btn btn-neutral w-40 bg-transparent text-white border-0" type="button" onClick={() => router.push('/courses')}>
        <ChevronLeft /> Go Back
      </button>
      <h1 className="my-4 w-full text-3xl lg:text-5xl xl:text-7xl gradient-span font-bold text-center">{title}</h1>
      {coursesProgressEnabled ?
        <>
          <div className="stats shadow mx-auto max-w-screen-md">
            <div className="stat hidden md:block">
              <div className="stat-title">Total Modules</div>
              <div className="stat-value text-primary">{numberOfModules}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Modules Remaining</div>
              <div className="stat-value text-secondary">{tasksRemaining}</div>
            </div>
            <div className="stat">
              <div className="stat-value">{`${progress}%`}</div>
              <div className="stat-title">Modules done</div>
            </div>
          </div>
        </>
        :
        null
      }

      <div className="mt-4 flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/${items?.length < 4 ? items?.length : 4} px-2 mb-4`}>
            <Card item={item} link={linkCore} isCompleted={isLessonCompleted(item.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Grid;