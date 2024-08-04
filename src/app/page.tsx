/* eslint-disable @next/next/no-img-element */
import { Header } from "./components/Header";
import { InteractiveElement } from "./components/InteractiveElement";
import { LovedBySection } from "./components/LovedBySection";
import { NavBar } from "./components/Navbar";

export default function Page() {
  return (
    <div
      className="bg-gray-100 min-h-screen relative"
      style={{
        backgroundImage: "url(/images/background-grids.png)",
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
      <div className="relative pb-[23rem] z-0 max-w-[dvw] overflow-hidden">
        <Header />
        <InteractiveElement />
      </div>
      <div className="z-50 relative">
        <NavBar />
        <LovedBySection />
      </div>
    </div>
  );
}
