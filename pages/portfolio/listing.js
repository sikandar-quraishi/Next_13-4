// pages/listing.js
import React from "react";
import Link from "next/link";

const Listing = () => {
  // Assume you have an array of items to display
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
  ];

  return (
    <div>
      <h1>Listing Page</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Link href={`/portfolio/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
