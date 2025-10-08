import React, { useState, useEffect } from "react";
import Product from "../product/product";
import SideCard from "../sidecard/sideCard";

 import { ToastContainer, toast } from 'react-toastify';

const AuctionsProducts = () => {
  const [auctionProducts, setAuctionProducts] = useState([]);


  useEffect(() => {
    fetch("productsData.json")
      .then((res) => res.json())
      .then((data) => setAuctionProducts(data));
  }, []);


  const [bidItems, setBidItems] = useState([]);

  const handleBidBtn= (product)=>{
   
   const isInBidItems = bidItems.find(item => item.id === product.id);

   if(!isInBidItems){
    setBidItems([product , ...bidItems]);
    toast.success("Item added to the Bid list");
   }
   else{
    toast.error("Item already in the Bid list");
   }
  }


  return (
    <>
    <ToastContainer />

    <div className="bg-[#EBF0F5] px-[10%] py-[6%]">

      <h2 className="mb-4 text-3xl text-[#0E2954] font-extrabold">
        Active Auctions
      </h2>
      <p className="mb-4">Discover and bid on extraordinary items</p>

      
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        
        
        <div className="rounded-2xl shadow-2xl bg-base-100 col-span-4 overflow-x-auto">
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
                <Product key={idx} product={product} handleBidBtn = {handleBidBtn} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Bid Items Sidebar */}
        <div className="col-span-1 lg:col-span-2 ">
          <SideCard bidItems={bidItems}></SideCard>
        </div>
      </div>
    </div>
    </>
  );
};

export default AuctionsProducts;
