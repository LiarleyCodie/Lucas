import { FC } from "react";
import clsx from "clsx";
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'

const PaginationControl: FC<{ currentPaginationPos: number }> = ({currentPaginationPos}) => {
  return (
    <div
      className={clsx('my-12 flex gap-2 mx-auto')}
    >
      <PaginationToggleButton disabled direction="previous" />

      <PaginationLink paginationPos={1} currentPaginationPos={currentPaginationPos} />
      <PaginationLink paginationPos={2} currentPaginationPos={currentPaginationPos} />
      <PaginationLink paginationPos={3} currentPaginationPos={currentPaginationPos} />

      <PaginationToggleButton direction="next" />
    </div>
  )
}

const PaginationLink: FC<{ paginationPos: number, currentPaginationPos: number }> = ({paginationPos, currentPaginationPos}) => {
  return paginationPos === currentPaginationPos ? (
      <span
        className={clsx('w-7 h-7 flex justify-center items-center border rounded-md select-none cursor-not-allowed',
                        'text-rose-800 border-rose-500 bg-rose-100 dark:text-rose-500 dark:bg-rose-900/20')}
      >{paginationPos}</span>
    ) : (
      <a 
        href={`/?page=${paginationPos}`}
        className={clsx('w-7 h-7 flex justify-center items-center bg-zinc-100 text-zinc-700 border border-zinc-300 rounded-md',
                        'dark:bg-zinc-800 dark:border-zinc-500 dark:text-zinc-400 hover:text-rose-800 hover:border-rose-500',
                        'active:bg-rose-100 dark:hover:text-rose-500 dark:active:bg-rose-900/20 active:border-rose-500',
                        'active:text-rose-500 dark:active:text-rose-500')}
        draggable={false}
      >
        {paginationPos}
      </a>
    ) 
}

type TPaginationToggleButton = {
  disabled?: boolean; direction: "previous" | "next"
}
const PaginationToggleButton: FC<TPaginationToggleButton> = ({disabled, direction}) => {
  const Icon = direction === 'next' ? <CaretRight weight='fill' size={16} /> : <CaretLeft weight='fill' size={16} />

  return disabled ? (
    <span 
      className={clsx('w-7 h-7 flex justify-center items-center bg-zinc-100 text-zinc-400 border border-zinc-200 rounded-md',
                      'dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-600 cursor-not-allowed')}
    >
      {Icon}
    </span>
  ) : (
    <button 
      className={clsx('w-7 h-7 flex justify-center items-center bg-zinc-100 text-zinc-700 border border-zinc-300 rounded-md',
                      'dark:bg-zinc-800 dark:border-zinc-500 dark:text-zinc-400 hover:text-rose-800 hover:border-rose-500',
                      'active:bg-rose-100 dark:hover:text-rose-500 dark:active:bg-rose-900/20 active:border-rose-500',
                      'active:text-rose-500 dark:active:text-rose-500')}
    >
      {Icon}
    </button>
  )
}

export default PaginationControl
