import React from "react";
import Shape from "./Shape";
export default function Testimonial() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="flex-1 relative">
        <h1 className="font-extrabold uppercase text-4xl text-center mt-20">
          testimonials
        </h1>
        <Shape top="-50%" left="37%" backgroundColor="purple" />
      </div>
      <div className="flex-1 flex items-center mx-5">
        <div className="flex-1 w-full h-full mx-5 bg-red-300"></div>
        <div className="flex-1  w-full h-full mx-5 bg-blue-300"></div>
        <div className="flex-1  w-full h-full mx-5 bg-yellow-300"></div>
      </div>
    </div>
  );
}
