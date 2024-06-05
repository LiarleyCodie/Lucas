import { FC } from "react";
import { Plus } from '@phosphor-icons/react/dist/ssr'
import clsx from "clsx";
import PostsGrid from '@/app/components/PostsGrid'
import PaginationControl from '@/app/components/PaginationControl'

const Home: FC<{ searchParams: { page: string } }> = ({searchParams}) => {
  const { page } = searchParams
  let currentPaginationPos = 1
  if (page && !isNaN(Number(page))) {
    currentPaginationPos = parseInt(page)
  }

  return (
    <main 
      className={clsx("flex flex-col px-4 sm:px-20 lg:px-44")}
    >
      <h1
        className={clsx('text-4xl w-full my-12 font-light flex items-center gap-2 text-zinc-700 dark:text-zinc-500 relative')}
      ><Plus size={24} /> Posts</h1>
      <PostsGrid/>
      <PaginationControl currentPaginationPos={currentPaginationPos} />
    </main>
  );
}





export default Home
