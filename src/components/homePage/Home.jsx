// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    cid: 111,
    name: "Dry_Fruits_And_Seeds",
    title: "Dry Fruits And Seeds",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
  },
  { cid: 112,
    name: "Snack_and_Beverages",
    title: "Snack and Beverages",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
  },
  { cid: 113,
    name: "Daily_Use_Products",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png",
  },
  // Add more categories as needed
];

const Home = () => {
    
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/main/${encodeURIComponent(category.name)}`}
          >
            <div className="bg-white p-4 rounded-md shadow-md">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <div className="text-center">{category.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
