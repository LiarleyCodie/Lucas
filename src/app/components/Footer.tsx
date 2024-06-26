import { FC } from "react";
import clsx from "clsx";

const Footer: FC = () => {
  return (
    <footer
      className={clsx('min-h-16 flex justify-center items-center border-t border-zinc-200 dark:border-t-zinc-800',
                     'dark:text-zinc-400')}
    >
      Oi, my name is Tiubira
    </footer>
  )
}

export default Footer
