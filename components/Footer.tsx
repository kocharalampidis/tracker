import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => (
  <footer className="footer items-center p-2 bg-neutral text-neutral-content bottom-0 mt-2">
    <div className="items-center grid-flow-col">
      <p>Copyright © 2023 - All right reserved</p>
    </div>
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <Link className="text-white" href={""}>
        <BsGithub size="25px" />
      </Link>
      <Link className="text-white" href={""}>
        <BsLinkedin size="25px" />
      </Link>
    </div>
  </footer>
);

export default Footer;
