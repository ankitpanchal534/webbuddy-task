/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IDraggableButton {
  it: any;
  snapshot: any;
  provided: any;
  animate: boolean;
}
export default function DraggableButton({
  it,
  snapshot,
  provided,
  animate,
}: IDraggableButton) {
  return (
    <button
      key={it.id}
      className={`absolute duration-1000 z-[10] ${
        animate ? "" : "-translate-x-28"
      }`}
      style={{
        left: animate ? `${it.left}px` : "50%",
        top: animate ? `${it.top}px` : "83%",
        opacity: animate ? "100%" : "0%",
      }}
    >
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className="group">
          <button
            className={` ${
              snapshot.draggingOver ||
              snapshot.isDragging ||
              snapshot.isDropAnimating
                ? "visible"
                : "invisible"
            }    group-hover:visible border border-red-400 bg-red-100 rounded-full text-xs px-1.5 py-0.5`}
          >
            Drag me{" "}
          </button>
          <img
            src={`/icons/${it.icon}`}
            alt="svg icon"
            style={{
              filter: snapshot.isDragging
                ? `drop-shadow(0px 5px 10px  lightblue)`
                : "none",
            }}
          />

          <div
            className={`
              ${
                snapshot.draggingOver ||
                snapshot.isDragging ||
                snapshot.isDropAnimating
                  ? "visible"
                  : "invisible"
              }    group-hover:visible
              w-36 absolute ${
                it?.anchor == "bottom"
                  ? "top-full -left-1/3"
                  : "top-0 left-full"
              }
         h-full bg-transparent border-red-400 border-dotted border rounded-xl p-2 z-50`}
          >
            <div className="w-full h-full bg-gray-50 p-1 rounded-xl text-start font-bold">
              <span className="text-xs ">AI Photo Studio</span>
              <div className="h-16 space-y-1 p-3 w-full rounded-md bg-white shadow-[0px_0px_6px_lightgray]">
                <div
                  className={`bg-gray-300 rounded-xl animate-pulse w-1/2 h-2`}
                />
                <div
                  className={`bg-gray-300 rounded-xl animate-pulse w-full h-2`}
                />
                <div
                  className={`bg-gray-300 rounded-xl animate-pulse w-full h-2`}
                />
                <div
                  className={`bg-gray-300 rounded-xl animate-pulse w-1/3 h-2`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
