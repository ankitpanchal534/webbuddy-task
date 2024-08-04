/* eslint-disable @next/next/no-img-element */
export const Header = () => (
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
