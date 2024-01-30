/** @format */

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import devicesImage from "@/assets/images/illustration-devices.svg";

export default function Home() {
  return (
    <div className="  min-h-screen w-full overflow-hidden">
      <div className="max-w-7xl  mx-auto pt-10 flex flex-col gap-16 p-2 lg:p-8">
        <Navbar />
        <main className="flex gap-6 flex-col-reverse lg:flex-row ">
          <LeftDiv />
          <RightDiv />
        </main>
      </div>
    </div>
  );
}

function LeftDiv() {
  return (
    <div className="pr-10  lg:w-1/2 flex flex-col gap-6 lg:gap-16 ">
      <div className="flex flex-col gap-4 lg:gap-7">
        <section className="flex gap-3 flex-col">
          <p className="flex gap-4 items-center  uppercase text-sm ">
            <span className="bg-slate-900 text-white font-bold px-2 py-1 rounded-full ">
              {" "}
              New
            </span>
            <span className=" tracking-[4px] text-gray-400">
              Monograph Dashboard
            </span>
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold uppercase">
            Powerful insights into your team
          </h1>
        </section>

        <p className="  text-gray-500 max-w-[450px]">
          Powerful insights into your team Project planning and time tracking
          for agile teams
        </p>
      </div>

      <section className="text-sm flex gap-4">
        <button className="bg-[hsl(0,100%,68%)] text-white px-5 lg:px-8  py-2 lg:py-2.5 rounded-md hover:opacity-80 font-semibold uppercase whitespace-nowrap">
          {" "}
          Schedule a demo
        </button>
        <button className="text-gray-400 text-xs sm:text-sm  uppercase tracking-[3px] whitespace-nowrap hover:opacity-80">
          {" "}
          to see a live preview
        </button>
      </section>
    </div>
  );
}

function RightDiv() {
  return (
    <>
      {/* mobile */}
      <div className="relative lg:hidden  z-10 h-[400px]">
        <div className="w-full absolute h-[480px] bg-[#eff4f7]   top-[-150px] right-[-120px]  rounded-bl-[32px] " />
        <Image
          className=" right-[-40px]  min-h-[226px] min-w-[455px] top-16  absolute  object-cover "
          src={devicesImage}
          alt="hero-img"
        />
      </div>
      {/* desktop */}
      <div
        className="hidden lg:flex w-1/2  relative z-10
"
      >
        <div className="w-full h-full bg-[#eff4f7] absolute  top-[-140px] right-[-120px]  rounded-bl-[32px] " />
        <Image
          className="absolute right-[-200px] object-contain  w-auto h-[400px]"
          src={devicesImage}
          alt="hero-img"
        />
      </div>
    </>
  );
}
