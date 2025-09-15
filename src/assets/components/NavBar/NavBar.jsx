import React from 'react';

const NavBar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm px-[10%]">
  <div className="navbar-start">
<div className="flex-1">
    <a className="btn btn-ghost text-3xl"><span className='text-blue-600'>Auction</span><span className='text-yellow-400'>Gallery</span></a>
  </div>
  </div>
  <div className="navbar-center">
    
 <div className=''>

    <ul className='list-none flex gap-12 justify-around items-center' >
        <li><a href="">Home</a></li>
        <li><a href="">Auctions</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">How to Works</a></li>
    </ul>

  </div>

  </div>
  <div className="navbar-end">
    <div className="flex-none">

    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        
      </div>
    </button>
  

   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
    );
};

export default NavBar;