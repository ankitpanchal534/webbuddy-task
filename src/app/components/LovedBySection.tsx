/* eslint-disable @next/next/no-img-element */
export const LovedBySection = () => {
  return (
    <section className=" py-20  z-[1]">
      <div className=" mx-auto  text-center">
        <h2 className="text-[16px] text-[#171618] font-medium">
          Loved by product folks at
        </h2>
        <div className="flex justify-center space-x-3 mt-8 flex-wrap">
          {new Array(8).fill("-").map((im, id) => (
            <div
              key={id}
              className="w-36 border-2 flex items-center rounded-2xl p-6 py-7 "
            >
              <img
                src={`/company-logos/1 (${id + 1}).svg`}
                alt="fictional company logo"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
