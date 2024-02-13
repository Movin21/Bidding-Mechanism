import React from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 m-">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                className="text-white text-lg font-semibold uppercase"
              >
                Logo
              </a>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    On Going Auctions
                  </a>
                </li>
                <li>
                  <a
                    href="/createAuction"
                    className="text-gray-300 hover:text-white"
                  >
                    Create an Auction
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
