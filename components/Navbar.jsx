import React from "react";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "DESIGN",
    path: "/design",
  },
  {
    id: 2,
    name: "DEVELOPMENT",
    path: "/dev",
  },
  {
    id: 3,
    name: "PRODUCTION",
    path: "/production",
  },
  {
    id: 4,
    name: "CONTACT",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className="w-full bg-black py-3">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <h1 className="text-4xl text-white cursor-pointer">HE3T</h1>
        <div className="flex items-center">
          {links.map((link) => (
            <li key={link.id} className="mx-3 text-white ">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
