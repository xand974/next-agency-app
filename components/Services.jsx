import React from "react";
import styles from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Services({ services }) {
  return (
    <div className={styles.container}>
      <h1 className="text-6xl text-green-600 font-bold mb-10">
        Voyez par vous-même tout ce que nous avons à vous offrir !
      </h1>
      <div className="flex flex-wrap w-full h-full">
        {services.map((service, key) => (
          <Link passHref href={`/service/${service.name}`} key={key}>
            <div className={styles.cardServices}>
              <p className="absolute top-3 left-3 text-2xl text-gray-400 font-extralight tracking-widest">
                {service.name}
              </p>
              <div className="rounded-full w-8/12 h-3/4 overflow-hidden relative transition-all">
                <Image
                  src={`/Images/` + service.img}
                  alt=""
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  layout="responsive"
                />
                <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-gray-50 w-10/12 text-center rounded-sm py-1 opacity-0 pointer-events-none transition-all">
                  <span className="text-gray-500">Découvrir</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
