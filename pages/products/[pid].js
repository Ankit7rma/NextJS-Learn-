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
async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathWithParams,
    // [    { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    // ],
    // if there are many a lots of pages and not all are in use so we generate only frequent use pages by paths and rest is fallback true
    // fallback: true,
    // if sets "blocking we dont need that Loading... code , it takes little long time "
    fallback: true,
  };
}
