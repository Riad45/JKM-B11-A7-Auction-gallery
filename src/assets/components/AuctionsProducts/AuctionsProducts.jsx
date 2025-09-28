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

        <div className="grid grid-cols-4 gap-5 ">


          <div className="rounded-2xl shadow-2xl bg-base-100 col-span-3">
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
                {auctionProducts.map((product) => (
                  <Product product={product}> </Product>
                ))}
              </tbody>
            </table>
          </div>


          {/* fav/bid item */}

          <div className="rounded-2xl shadow-2xl bg-base-100 p-10 ">
        <h1>Favorite Items</h1>
        <br />
        <br />
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet labore
          tempora reiciendis cum commodi pariatur soluta? Quisquam nobis
          aspernatur eum.
        </p>

        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, atque!
        </p>
      </div>



        </div>
      

      
    </div>
  );
};

export default AuctionsProducts;
