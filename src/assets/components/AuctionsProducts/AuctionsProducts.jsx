import React, { useState } from "react";
import Product from "../product/product";

const AuctionsProducts = () => {
  const [auctionProducts, setauctionProducts] = useState([]);

  fetch("productsData.json")
    .then((res) => res.json())
    .then((data) => setauctionProducts(data));

  return (
    <div className="bg-[#EBF0F5] px-[10%] py-[6%]">
      <h2 className="mb-4 text-3xl text-[#0E2954] font-extrabold">
        Active Auctions
      </h2>
      <p className="mb-4">Discover and bid on extraordinary items</p>

      {/* Auction Table card */}

      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black">
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>

                {
                    auctionProducts.map(product=> <Product product={product}> </Product>)
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuctionsProducts;
