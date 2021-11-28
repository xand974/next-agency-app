import React from "react";
import { products } from "../../helpers/data";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Product.module.css";
import Link from "next/link";
export default function Product({ product }) {
  return (
    <div className="flex items-center py-20 px-10 max-lg:flex-col-reverse">
      <Head>
        <title>The Nr 1 Digital Solution for your needs</title>
        <meta name="description" content="You ask, we design" />
      </Head>
      <div className="card flex-2 flex flex-wrap h-96 max-lg:flex-col max-lg:h-full max-lg:w-full">
        {product.images.map((img, key) => (
          <div className={styles.productCard} key={key}>
            <Image
              alt="product"
              objectFit="cover"
              layout="fill"
              src={img.url}
            />
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col items-start max-lg:items-center">
        <h1 className=" text-5xl mb-11 font-bold max-lg:my-10">
          {product.title}
        </h1>
        <p className="text-xl font-extralight mb-11 text-gray-700 max-lg:text-center max-lg:w-10/12">
          {product.desc}
        </p>
        <button className="py-3 px-4 text-xl bg-green-400 text-white rounded-lg max-lg:w-10/12 max-lg:mb-5">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export const getStaticPaths = () => {
  const res = products;
  const paths = res.map((product) => {
    return {
      params: { name: product.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (ctx) => {
  const name = ctx.params.name;
  console.log(name);
  const product = products.filter((item) => item.name === name)[0];

  return {
    props: {
      product,
    },
  };
};
