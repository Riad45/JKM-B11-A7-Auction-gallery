import React from "react";
import { TbHammer } from "react-icons/tb";
import { ImHammer2 } from "react-icons/im";

const Product = ({ product, handleBidBtn, bidItems }) => {
  // Check if this product is already in the bidItems list
  const isBidded = bidItems.some(item => item.id === product.id);

  return (
    <tr className="text-[#0E2954]">
      <td className="flex items-center gap-3 p-2">
        <img
          className="h-24 w-24 flex-shrink-0 object-cover rounded"
          src={product.image}
          alt={product.title}
        />
        <div>
          <p className="font-medium">{product.title}</p>
        </div>
      </td>

      <td className="align-middle">{product.currentBidPrice}</td>
      <td className="align-middle">{product.timeLeft}</td>

      <td className="align-middle">
        <button
          onClick={() => handleBidBtn(product)}
          disabled={isBidded}
          className={`p-2 rounded transition-all duration-300 
            ${isBidded 
              ? "cursor-not-allowed opacity-60" 
              : "hover:cursor-pointer"
            }`}
        >
          <ImHammer2 color={isBidded && "F50000"} size={30} />
        </button>
      </td>
    </tr>
  );
};

export default Product;
