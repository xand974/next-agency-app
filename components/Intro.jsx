import React from "react";
import styles from "../styles/Intro.module.css";
import Shape from "./Shape";
import Image from "next/image";
export default function Intro() {
  return (
    <div className={styles.introContainer}>
      <Shape top="-60px" left="-60px" backgroundColor="green" />
      <Shape top="0%" right="-100px" zIndex={40} backgroundColor="#c2f4f6" />
      <div className="flex-1 flex justify-between flex-col max-lg:my-5 max-lg:justify-around">
        <h1 className="text-6xl font-extrabold leading-normal max-lg:text-center max-lg:text-5xl max-lg:mt-16">
          <span className="text-green-500">He3t</span> Discover something new
        </h1>
        <p className="italic text-2xl font-extralight w-10/12 leading-snug max-lg:text-center max-lg:my-6 max-lg:w-full max-lg:text-lg">
          <q>
            L'échec fait partie intégrante de notre réussite. L'échec, c'est
            l'envers de la réussite
          </q>
        </p>
        <button className="bg-green-300 w-3/12 px-4 py-2 text-xl text-white rounded-md max-lg:w-11/12 max-lg:mx-auto">
          Découvrir
        </button>
      </div>
      <div className="flex-1 relative max-lg:h-full">
        {/* <svg
          viewBox="0 0 200 200"
          className="svgImg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#13B981"
            d="M64.9,-0.8C64.9,25,32.4,50,0.5,50C-31.5,50,-63,25,-63,-0.8C-63,-26.7,-31.5,-53.4,0.5,-53.4C32.4,-53.4,64.9,-26.7,64.9,-0.8Z"
            transform="translate(100 100)"
          />
        </svg> */}
        <Image
          src="https://image.freepik.com/vecteurs-libre/concept-illustration-therapie-groupe_52683-45727.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
}
