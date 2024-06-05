import { FC } from "react";

const PostPage: FC<{ params: { id: string } }> = ({params}) => {
  const {id} = params
  return (
    <main>
    you're on post with id <strong>{id}</strong>
    </main>
  )
}

export default PostPage
