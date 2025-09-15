import React from "react";

const Product = ({ product }) => {
  return (
    <tr className="text-[#0E2954]">
      {/* first cell: image + title */}
      <td className="flex items-center gap-3 p-2">
        <img
          className="h-24 w-24 flex-shrink-0 object-cover rounded"
          src={product.image}
          alt={product.title}
        />
        {/* min-w-0 is important so truncate can work inside a flex child */}
        <div className="min-w-0">
          <p className="font-medium truncate">{product.title}</p>
        </div>
      </td>

      <td className="align-middle">{product.currentBidPrice}</td>
      <td className="align-middle">{product.timeLeft}</td>
      <td className="align-middle">
        <button className="btn btn-sm btn-primary">Bid</button>
      </td>
    </tr>
  );
};

export default Product;
