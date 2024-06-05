import { FC } from "react";
import clsx from "clsx";
import PostCard from '@/app/components/PostCard'

const PostsGrid: FC = () => {
  const arr = new Array(9).fill(true);

  return (
    <section className={clsx('flex flex-col flex-wrap gap-4 mx-auto md:flex-row max-w-[41rem] xl:max-w-[62rem]')}>
      {arr.map((_, i) => (
        <PostCard
          key={i}
          href='twobira'
          imageSrc="/thumbnail.jpg"
          imageAlt="just some mountains"
          width={640} height={427}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, nam ratione aliquid natus perferendis 
            voluptatem quasi laudantium eveniet numquam ipsa!"
        >
          Lorem ipsum dolor sit amet consectetur.
        </PostCard>
      ))}
    </section>
  )
}

export default PostsGrid
