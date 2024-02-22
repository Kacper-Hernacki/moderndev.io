"use client";
import { useSession } from "next-auth/react";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { serverTimestamp } from "@firebase/database";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export default function CompleteModule({ moduleLessonId, moduleId }: { moduleLessonId: string, moduleId: string }) {
  const { data: session } = useSession();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  useEffect(() => {
    const checkIfLessonCompleted = async () => {
      // @ts-ignore
      const lessonDocRef = doc(db, "users", session.user.id, "course_progress", moduleId, "lessons", moduleLessonId);
      const docSnap = await getDoc(lessonDocRef);

      // If the document exists and has a completedAt field, the lesson is completed
      if (docSnap.exists() && docSnap.data().completedAt) {
        setIsCompleted(true);
      }
    };

    if (session?.user?.id) {
      checkIfLessonCompleted();
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [session, moduleLessonId, moduleId]);

  async function completeModule() {
    setIsLoading(true);
    try {
      // @ts-ignore
      const moduleDocRef = doc(db, "users", session.user.id, "course_progress", moduleId);
      await setDoc(moduleDocRef, {}, { merge: true });
      // @ts-ignore
      const lessonDocRef = doc(db, "users", session.user.id, "course_progress", moduleId, "lessons", moduleLessonId);
      await setDoc(lessonDocRef, {
        completedAt: serverTimestamp(),
      }, { merge: true });
      setIsLoading(false);
      setIsCompleted(true);
      enqueueSnackbar("Lesson Completed", { variant: "success" });
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      enqueueSnackbar("Could not mark as a complete", { variant: "error" });
    }
    await router.back();
  }

  return (
    <div className="mt-12 flex flex-col px-4 lg:px-0">
      {isLoading ?
        <button className="btn btn-large btn-disabled w-full" disabled>Loading lesson
          status <span className="loading loading-dots loading-lg"></span></button>

        : isCompleted ? (
          <>
            <h3 className="mb-4 text-xl font-bold">You have completed this lesson</h3>
            <button className="btn btn-large btn-disabled w-full" disabled>Completed</button>
          </>
        ) : (
          <>
            <h3 className="mb-4 text-xl font-bold">Have you completed? Mark it completed so that you can track
              progress:</h3>
            <button className="btn btn-large btn-accent w-full" onClick={completeModule}>Mark Completed</button>
          </>
        )}
    </div>
  );
}