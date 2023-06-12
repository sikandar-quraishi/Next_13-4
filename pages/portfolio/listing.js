// pages/listing.js
import React from "react";
import Link from "next/link";
import products from "../components/common/fakeproducts/products";


const Listing = () => {
  return (
    <div>
      <h1>Listing Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link href={`/portfolio/${product.id}`}>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
