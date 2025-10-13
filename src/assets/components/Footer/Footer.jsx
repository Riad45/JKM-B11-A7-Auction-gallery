import React from "react";

const Footer = () => {
  return (
    <div className="felx flex-col text-center p-30">
      <div className="flex-1 mb-5">
        <a className="btn btn-ghost text-3xl">
          <span className="text-blue-600">Auction</span>
          <span className="text-yellow-400">Gallery</span>
        </a>
      </div>
      <ul className="flex gap-10 mb-5 justify-center">
        <li>Bid.</li>
        <li>Win.</li>
        <li>Own.</li>
      </ul>

      <ul className="flex gap-15 mb-5 justify-center">
        <li><a href="">Home</a></li>
        <li><a href="">Auctions</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">How to works</a></li>
      </ul>

      <p className="text-neutral-400">© 2025 AuctionHub. All rights reserved.</p>
    </div>
  );
};

export default Footer;
