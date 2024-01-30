/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useState } from "react";

type Props = {};
const navLinks = [
  {
    title: "PRODUCT",
    href: "#"
  },
  {
    title: "FEATURES",
    href: "#"
  },
  {
    title: "PRICING",
    href: "#"
  }
];

export default function Navbar({}: Props) {
  const [animationParent] = useAutoAnimate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="flex justify-between  items-center z-20    ">
      <Image src={logo} alt="logo" />
      {/* right data */}
      <div ref={animationParent} className="lg:hidden relative">
        <button ref={animationParent} onClick={handleToggle}>
          {isMenuOpen ? (
            <IoCloseOutline className="text-4xl cursor-pointer" />
          ) : (
            <FiMenu className="text-3xl cursor-pointer" />
          )}
        </button>
        {isMenuOpen && <MobileNavLinks />}
      </div>
      <section className=" hidden  lg:flex items-center text-sm font-semibold gap-5   ">
        <div className="flex  gap-5 ">
          {navLinks.map((d, i) => (
            <Link className="hover:underline" key={i} href={d.href}>
              {d.title}{" "}
            </Link>
          ))}
        </div>
        <div className="bg-gray-300 h-1 w-1 rounded-full" />
        <button className="text-gray-400 hover:underline"> LOGIN </button>
      </section>
      {/* logo */}
      {/* nav links */}
    </nav>
  );
}

function MobileNavLinks() {
  return (
    <div className="  m-auto inset-x-0  fixed top-28  w-full max-w-[300px] h-fit  bg-white font-semibold gap-5 items-center shadow-xl flex-col flex  p-5  ">
      <div className="flex  gap-5 flex-col items-center ">
        {navLinks.map((d, i) => (
          <Link className="hover:underline" key={i} href={d.href}>
            {d.title}{" "}
          </Link>
        ))}
      </div>
      <div className="bg-gray-300 h-[1px] w-full rounded-full" />
      <button className="text-gray-400 hover:underline"> LOGIN </button>
    </div>
  );
}
