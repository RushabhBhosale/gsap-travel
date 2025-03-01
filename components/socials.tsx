"use client";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  { path: "/", name: <RiLinkedinFill /> },
  { path: "/", name: <RiGithubFill /> },
  { path: "/", name: <RiInstagramFill /> },
  { path: "/", name: <RiFacebookFill /> },
];

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link key={index} href={icon.path}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
