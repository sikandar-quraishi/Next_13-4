// pages/[id].js
import React from "react";
import { useRouter } from "next/router";
import products from "../components/common/fakeproducts/products";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === Number(id));
  const { name, price, description, category } = product;

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div className="detail-page">
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      <div className="product-item">
        <h1>Detail Page</h1>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default Detail;
