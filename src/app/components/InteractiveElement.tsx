"use client";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DraggableButton from "./DraggableButton";
import { features } from "../utils/features_data";

export const InteractiveElement = () => {
  const [animate, setAnimate] = useState(false);
  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const onDragEnd = (result: any) => {
    console.log(result);
  };
  if (!winReady) return;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div>
            {provided.placeholder}
            <div className="absolute top-0 left-0 min-h-[800px] w-full justify-center ">
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                id="droppable-area"
                className="container  mt-96 mx-auto 2xl:max-w-xl lg:max-w-lg px-4 py-8 text-center drop-box"
              >
                <div
                  style={{
                    backgroundImage: "url(/icons/ai-icon.png)",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="h-16 w-16 rounded-full m-auto animate-spin select-none"
                />
                <p className="text-sm font-bold  mt-2">
                  Drag features to view details
                </p>
              </div>
            </div>

            <div className="absolute top-0 h-full w-full flex justify-center ">
              <div className=" relative z-20 h-full w-full 2xl:max-w-screen-xl">
                {features.map((it, index) => {
                  return (
                    <Draggable
                      key={it.id}
                      draggableId={it.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <DraggableButton
                          provided={provided}
                          snapshot={snapshot}
                          animate={animate}
                          it={it}
                          key={index}
                        />
                      )}
                    </Draggable>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
