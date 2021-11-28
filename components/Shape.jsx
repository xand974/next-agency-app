import React from "react";

export default function Shape({
  top,
  left,
  right,
  bottom,
  backgroundColor,
  zIndex,
}) {
  return (
    <div
      className="w-96 h-96 rounded-full absolute opacity-10"
      style={{ top, left, right, bottom, backgroundColor, zIndex }}
    ></div>
  );
}
