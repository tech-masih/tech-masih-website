import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { IoLogoLinkedin} from "react-icons/io";
import {RiSnapchatFill, RiFacebookBoxFill} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="p-6 lg:w-[1200px] mx-auto flex flex-col lg:flex-row flex-wrap items-center justify-center lg:justify-between gap-y-4 lg:gap-y-0">
        <p className="font-normal text-center text-[16px] leading-6">&copy; Copyrights Tech Masih | All Rights Reserved</p>
        {/* Social Links  */}
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
                      title="Twitter" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.snapchat.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <RiSnapchatFill size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Snapchat" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <AiFillInstagram size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Instagram" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedIn.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <IoLogoLinkedin size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="LinkedIn" />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.github.com/" passHref legacyBehavior>
                  <a target="_blank">
                    <AiFillGithub size={'1.4rem'}
                     className="duration-200 ease-in hover:scale-[1.2]"
                      title="Github" />
                    </a>
                </Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;
