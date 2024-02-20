import Link from "next/link";
import React, { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;
  if (!loadedProduct) {
    return <p>Loading ...</p>;
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
      <Link href="/">Back</Link>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      //   { params: { pid: "p2" } },
      //   { params: { pid: "p3" } },
    ],
    // if there are many a lots of pages and not all are in use so we generate only frequent use pages by paths and rest is fallback true
    fallback: true,
  };
}
