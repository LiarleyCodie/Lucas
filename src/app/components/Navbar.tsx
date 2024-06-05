import { FC } from "react";
import ThemeSwitchButton from "@/app/components/ThemeSwitchButton"
import clsx from "clsx";

const Navbar: FC = () => {
  return (
    <nav 
      className={clsx('border-b border-b-zinc-200 dark:border-b-zinc-800 flex items-center justify-between min-h-16 px-4',
                     'sm:px-20 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 lg:px-44')}
      role="navigation" aria-label="main navigation"
    >
      <a href='/' 
        className={clsx('text-xl font-semibold')}
      >Lucas</a>

      <ul className={clsx('ml-auto')}>
        <NavLink href='/'>Início</NavLink>
      </ul>
      <ThemeSwitchButton />
    </nav>
  )
}

const NavLink: FC<{ href: string; children: string }> = ({ href, children }) => {
  return (
    <li>
      <a href={href}
        className={clsx('block px-2 py-2 md:px-4 hover:underline')}
      >{children}</a>
    </li>
  )
}

export default Navbar
