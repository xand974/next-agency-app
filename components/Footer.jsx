import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="border-t-4 border-green-800 flex items-start py-10 px-12 max-lg:flex-col max-lg:items-center">
      <div className="flex-1  ">
        <div className="mb-10 max-lg:flex max-lg:justify-center">
          <span className="bg-green-500 text-5xl py-1 px-2 text-white max-lg:text-2xl ">
            HEET AGENCY
          </span>
        </div>

        <p className="text-4xl font-bold underline max-lg:mb-4">
          Travaillez avec nous{" "}
          <Image
            src="https://www.svgrepo.com/show/274250/send.svg"
            alt="redirection vers notre domaine principal"
            width="35"
            height="35"
          />{" "}
        </p>
      </div>
      <div className="flex-1 flex max-md:flex-col max-lg:justify-between">
        <div className="flex-1 flex flex-col justify-between ">
          <p className="text-xl font-extralight mb-10 max-lg:mb-3">
            259 Voie Domitienne, 34090 Montpellier
          </p>
          <p className="text-xl font-extralight max-lg:mb-3">
            xand974@gmail.com
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-xl font-extralight mb-10 max-lg:mb-3">
            Suivez moi sur Instagram @xand974
          </p>
          <p className="text-xl font-extralight ">
            &#169; 2021 Malet - Tous droits réservés{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
