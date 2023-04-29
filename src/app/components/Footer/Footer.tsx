import Link from "next/link";

import { AiFillInstagram, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin} from "react-icons/io";
import {RiSnapchatFill, RiFacebookBoxFill} from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="p-2 max-w-6xl mx-auto flex flex-wrap items-center justify-between">
        <p className="font-normal text-[16px]">&copy; Copyrights Tech Masih | All Rights Reserved</p>
        <ul className="list-none flex flex-wrap gap-4">
            <li>
                <Link href="https://www.facebook.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <RiFacebookBoxFill size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Facebook" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.twitter.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <AiOutlineTwitter size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Facebook" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.twitter.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <RiSnapchatFill size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Facebook" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <AiFillInstagram size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Facebook" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedIn.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <IoLogoLinkedin size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Facebook" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.github.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <AiFillGithub size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Facebook" />
                    </a>
                </Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;