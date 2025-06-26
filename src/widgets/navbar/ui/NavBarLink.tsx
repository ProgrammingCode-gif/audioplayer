import Link from "next/link"

type Props = {
    path: string,
    text: string
}

const NavBarLink = ({path, text}: Props) => {
  return (
    <Link className="text-neutral-500 text-sm font-bold hover:text-white hover:scale-105 transition-all duration-150" href={path}>{text}</Link>
  )
}

export default NavBarLink