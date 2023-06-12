// pages/[id].js
import React from "react";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Detail Page</h1>
      <p>Item ID: {id}</p>
    </div>
  );
};

export default Detail;
