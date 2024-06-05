import { FC } from "react";
import clsx from "clsx";

const PostPage: FC<{ params: { id: string } }> = async ({params}) => {
  const {id} = params
  return (
    <main
      className={clsx("flex flex-col px-3 pb-4 py-4 sm:py-12 sm:px-20 lg:px-44")}
    >
      you're on post with id <strong>{id}</strong>
    </main>
  )
}

export default PostPage
