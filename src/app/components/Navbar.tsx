import GlobeIcon from "../icons/GlobeIcon";

/* eslint-disable @next/next/no-img-element */
export const NavBar = () => (
  <nav
    className=" text-sm flex justify-center fixed bottom-3
      w-full text-black font-medium z-[500]"
  >
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
