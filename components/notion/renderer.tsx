"use client"
import { NotionRenderer } from "react-notion-x";
import Link from "next/link";



import dynamic from 'next/dynamic'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
//   {
//     ssr: false
//   }
// )
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)
export const NotionPage = ({
  // @ts-ignore
  recordMap,
  // @ts-ignore
  rootPageId
}) => {
  if (!recordMap) {
    return null;
  }

  return (
    <div className="notion__container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
        components={{
          nextLink: Link,
           Code,
           Collection,
           Equation,
           Modal
        }}
      />
    </div>
  );
};