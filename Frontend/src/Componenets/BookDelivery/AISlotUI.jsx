import React from "react";
import { Vortex } from "../ui/vortex";

export function AISlotUI() {
  return (
    (<div
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-full py-28 overflow-hidden">
      <Vortex
        backgroundColor="red"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center">
          AI Recommended Slots
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Fill the form and click on analyze button to get AI recommended slots from your preferred time.
        </p>
      </Vortex>
    </div>)
  );
}