import React from "react";
import { TbHammer } from "react-icons/tb";

const Product = ({ product }) => {
  return (
    <tr className="text-[#0E2954]">
      
      <td className="flex items-center gap-3 p-2">
        <img
          className="h-24 w-24 flex-shrink-0 object-cover rounded"
          src={product.image}
          alt={product.title}
        />
      
        <div className="min-w-0">
          <p className="font-medium truncate">{product.title}</p>
        </div>
      </td>

      <td className="align-middle">{product.currentBidPrice}</td>
      <td className="align-middle">{product.timeLeft}</td>
      <td className="align-middle">
        <button><TbHammer size={30} />
</button>
      </td>
    </tr>
  );
};

export default Product;
