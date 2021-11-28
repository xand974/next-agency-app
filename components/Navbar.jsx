import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import styles from "../styles/Navbar.module.css";

const links = [
  {
    id: 1,
    name: "DESIGN",
    path: "/products/design",
  },
  {
    id: 2,
    name: "DEVELOPMENT",
    path: "/products/development",
  },
  {
    id: 3,
    name: "PRODUCTION",
    path: "/products/production",
  },
  {
    id: 4,
    name: "CONTACT",
    path: "/contact",
  },
];

export default function Navbar() {
  // const [mouseY, setMouseY] = useState(0);
  // const navRef = useRef();

  // useEffect(() => {
  //   var options = {
  //     root: navRef.current,
  //     rootMargin: "-10px 0px",
  //     threshold: 0,
  //   };
  //   window.addEventListener("scroll", (e) => {
  //     setMouseY(window.scrollY);
  //   });
  //   const handleObserver = (items) => {
  //     items.forEach((item) => {
  //       console.log(item);
  //       item.target.style.transform = `translateY(${Math.floor(-71)}px)`;
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleObserver, options);
  //   observer?.observe(navRef.current);
  // }, []);
  const [openHam, setOpenHam] = useState(false);
  return (
    <nav className="w-full bg-black py-3 max-md:py-5 max-md:fixed z-50">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <Link href="/" passHref={true}>
          <h1 className="text-4xl text-white cursor-pointer md:text-5xl">
            HE3T
          </h1>
        </Link>
        <div className="flex items-center max-sm:hidden ">
          {links.map((link) => (
            <li key={link.id} className="mx-3 text-white ">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </div>
        <div className="hidden max-sm:block">
          <button
            className="text-white text-5xl cursor-pointer"
            onClick={() => setOpenHam((openHam = !openHam))}
          >
            <Menu color="white" fontSize="large" />
          </button>
        </div>
        <ul
          style={{
            height: "calc(100vh - 72px)",
            transform: `translateX(${openHam ? "0vw" : "50vw"})`,
          }}
          className="fixed w-60 bg-black flex flex-col justify-around bottom-0 z-50 right-0 py-3 transition-all min-sm:hidden"
        >
          {links.map((link) => (
            <li key={link.id} className={styles.hamburgerItem}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
