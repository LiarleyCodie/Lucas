import { FC } from "react"
import Image from "next/image"
import clsx from "clsx"
import { CalendarDot } from '@phosphor-icons/react/dist/ssr'

type TPostCard = {
  href: string; description: string; children: string; imageSrc: string; width: number; height: number;
  imageAlt: string;
}
const PostCard: FC<TPostCard> = ({href, description, children, width, height, imageSrc, imageAlt }) => {
  return (
    <article className={clsx('max-w-80 relative')}>
      <a 
        className={clsx('group block pb-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-within:bg-zinc-100 focus-within:dark:bg-zinc-800',
                       'outline outline-1 outline-transparent hover:outline-zinc-900/50 hover:dark:outline-zinc-100/50',
                       'focus-within:outline-zinc-900/50 focus-within:dark:outline-zinc-100/50')}
        href={`/post/${href}`}
      >
        <Image src={imageSrc} alt={imageAlt} width={width} height={height} title={description}/>

        <div className='px-2'>
          <footer className={clsx('flex gap-2 items-center text-zinc-600 dark:text-zinc-500 text-sm mt-2')}>
            <CalendarDot weight='bold' size={16} /> 5 Jun, 2024
          </footer>
          <header className='text-xl group-hover:underline group-focus-within:underline'>{children}</header>
        </div>
      </a> 
    </article>
  )
}

export default PostCard
