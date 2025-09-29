import React, { useState, useEffect } from "react";
import Product from "../product/product";
import SideCard from "../sidecard/sideCard";

const AuctionsProducts = () => {
  const [auctionProducts, setAuctionProducts] = useState([]);

  // ✅ fetch only once when component mounts
  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => setAuctionProducts(data));
  }, []);

  return (
    <div className="bg-[#EBF0F5] px-[10%] py-[6%]">
      <h2 className="mb-4 text-3xl text-[#0E2954] font-extrabold">
        Active Auctions
      </h2>
      <p className="mb-4">Discover and bid on extraordinary items</p>

      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        
        
        <div className="rounded-2xl shadow-2xl bg-base-100 col-span-3 overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-black ">
                <th className="w-1/2">Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {auctionProducts.map((product, idx) => (
                <Product key={idx} product={product} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Favorite Items Sidebar */}
        <SideCard></SideCard>
      </div>
    </div>
  );
};

export default AuctionsProducts;
