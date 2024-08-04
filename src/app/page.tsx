/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import GlobeIcon from "./icons/GlobeIcon";
import { features } from "./utils/features_data";

export default function Page() {
  return (
    <div
      className="bg-gray-100 min-h-screen relative"
      style={{
        backgroundImage: "url(/images/background-grids.png)",
        // backgroundImage: "url(/images/background_image.svg)",

        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full  -z-0"
        style={{
          backgroundImage: "url(/images/bg-grediant.png)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full  z-0"
        style={{
          backgroundImage: "url(/images/background_image.svg)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-0">
        <NavBar />
        <Header />

        <InteractiveElement />
        <LovedBySection />
      </div>
    </div>
  );
}

const NavBar = () => (
  <nav className=" text-sm flex justify-center fixed bottom-5 left-0 w-full text-black font-medium z-10">
    <div className="container bg-white xl:max-w-screen-lg 3xl:max-w-screen-xl shadow-[0px_0px_24px_lightgray] rounded-xl  px-4 py-2 flex justify-between items-center ">
      <div className="flex space-x-7 2xl:space-x-8 items-center">
        <button className="default-btn">Home</button>
        <a href="#">Features</a>
        <a href="#">How it works</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
        <img src="/icons/logo_small.png" className="h-10" alt="small logo" />
        <a href="#">FAQs</a>
        <a href="#">Blogs</a>
      </div>
      <div className="flex space-x-7 3xl:space-x-8 items-center">
        <GlobeIcon />
        <button>Sign In</button>
        <button className="default-btn">Live demo</button>
      </div>
    </div>
  </nav>
);

const Header = () => (
  <header className="text-center py-16 flex justify-center">
    <div className="w-auto max-w-xl">
      <div className="flex justify-center flex-col items-center gap-5 mb-3">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className=" bg-white border-2  border-gray-50 text-sm w-fit  rounded-xl shadow-[0px_6px_10px_lightgray]">
          <div className="p-1 px-3 rounded-xl flex border-2 border-white items-center ">
            <img
              src="/icons/user_avatars.svg"
              className="h-6 "
              alt="user avatars"
            />
            <span className=" ml-2">Join 3k+ Members</span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl 2xl:text-5xl font-bold ">
        #1 Platform for all your marketing needs
      </h1>
      <p className="text-gray-600 mt-4">
        NextGen AI is a unified AI platform that provides all generative AI
        tools in one platform for all the marketing needs.
      </p>
    </div>
  </header>
);

const InteractiveElement = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="absolute top-0 left- pb-32 w-full justify-center ">
      <div className="container  mt-96 mx-auto 2xl:max-w-xl lg:max-w-lg px-4 py-8 text-center drop-box">
        {/* <img
        src="/icons/ai-icon.png"
        className="h-16 w-16 rounded-full m-auto animate-spin select-none"
        alt="ai icon"
      /> */}
        <div
          style={{
            backgroundImage: "url(/icons/ai-icon.png)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
          className="h-16 w-16 rounded-full m-auto animate-spin select-none"
        />
        <p className="text-sm font-bold  mt-2">Drag features to view details</p>
        {/* interactive element here */}
      </div>
      <div className="absolute top-0 h-full w-full  ">
        <button
          className="absolute bottom-0 left-1/2 -translate-x-28 "
          onClick={() => setAnimate(true)}
        >
          <img src="/icons/Group 14.svg" alt="svg icon" />
        </button>
        {features.map((it, index) => {
          return (
            <button
              key={it.id}
              className={`absolute duration-500`} // style={{
              //   top: it.top,
              // }}
              // className={`absolute top-[0px] left-[${it.left}px]  `}
              style={{
                left: `${(index + 1) * 120}px`,
                top: animate
                  ? `${(index < 5 ? index + 1 : 5 - index + 1) * 120}px`
                  : "100%",
              }}
            >
              {it.top}
              {50 * (index + 1)}
              <img src={`/icons/${it.icon}`} alt="svg icon" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

const LovedBySection = () => (
  <section className=" py-20 mt-52 z-[1]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-[16px] text-[#171618] font-medium">
        Loved by product folks at
      </h2>
      <div className="flex justify-center space-x-8 mt-8">
        <span>Capsule</span>
        <span>Loyers</span>
        <span>Sisyphus</span>
        <span>Sphende</span>
        <span>Luminous</span>
        <span>FocalPoint</span>
        <span>Polymath</span>
        <span>Epicurious</span>
        <span>Aome Corp</span>
      </div>
    </div>
  </section>
);
