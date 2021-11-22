import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="border-t-4 border-green-800 flex items-start py-10 px-12 ">
      <div className="flex-1 h-full">
        <div className="mb-10">
          <span className="bg-green-500 text-5xl py-1 px-2 text-white">
            HEET AGENCY
          </span>
        </div>

        <p className="text-4xl font-bold underline">
          Travaillez avec nous{" "}
          <Image
            src="https://www.svgrepo.com/show/274250/send.svg"
            alt="redirection vers notre domaine principal"
            width="35"
            height="35"
          />{" "}
        </p>
      </div>
      <div className="flex-1 flex h-full">
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-xl font-extralight mb-10">
            259 Voie Domitienne, 34090 Montpellier
          </p>
          <p className="text-xl font-extralight">xand974@gmail.com</p>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-xl font-extralight mb-10">
            Suivez moi sur Instagram @xand974
          </p>
          <p className="text-xl font-extralight">
            &#169; 2021 Malet - Tous droits réservés{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
