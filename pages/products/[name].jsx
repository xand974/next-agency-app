import React from "react";
import { data } from "../../helpers/data";

export default function Product({ product }) {
  console.log(product);
  return <div></div>;
}

export const getStaticPaths = () => {
  const products = data;
  const paths = products.map((p) => {
    return {
      params: { name: p.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];

  return {
    props: { product },
  };
};
