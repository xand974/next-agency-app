import React from "react";
import Shape from "../components/Shape";
const inputs = [
  { id: 1, type: "text", placeholder: "Username", name: "username" },
  { id: 2, type: "text", placeholder: "Phone", name: "phone" },
  { id: 3, type: "text", placeholder: "Email", name: "email" },
  { id: 4, type: "text", placeholder: "Subject", name: "subject" },
];

export default function contact() {
  return (
    <div className="flex items-center justify-center mb-10 pb-10 relative overflow-hidden border-b-custom ">
      <Shape backgroundColor="#20ff20" top="-80px" left="-100px" />
      <Shape backgroundColor="#ffef0f" bottom="-80px" right="-100px" />
      <div className="flex flex-col max-lg:mt-20">
        <h1 className="text-center text-5xl my-11 font-bold">Une question ?</h1>
        <form className="flex flex-wrap w-5/12 mx-auto max-lg:flex-col max-lg:w-full">
          {inputs.map((item) => (
            <input
              key={item.id}
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              className="input-size p-3 outline-none border-default m-2 font-mono max-lg:w-full max-lg:m-0 max-lg:my-2"
            />
          ))}
          <textarea
            placeholder="votre message..."
            className="w-full p-3 border-default m-2 resize-none font-mono max-lg:m-0 max-lg:my-2"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="mt-3 my-2 w-8/12 mx-auto bg-green-400 py-3 text-white rounded-lg cursor-pointer">
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
}
