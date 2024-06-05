'use client'
import { FC } from "react";
import { MoonStars, Sun } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { useTheme } from "next-themes";

const ThemeSwitchButton: FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme == 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button 
      className={clsx('w-9 h-9 hover:bg-zinc-100 active:bg-zinc-200 duration-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-700',
                     'flex justify-center items-center dark:bg-zinc-900 dark:border-zinc-700')} 
      onClick={toggleTheme}
    >
      <MoonStars size={20} className='block dark:hidden' />
      <Sun size={20} className='hidden dark:block' />
    </button>
  )
}

export default ThemeSwitchButton
