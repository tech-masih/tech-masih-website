import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-2 max-w-7xl flex flex-wrap items-center justify-between">
        <p className="font-normal text-[16px]">&copy; Copyrights Tech Masih | All Rights Reserved</p>
        <ul>
            <li>
                <Link></Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;