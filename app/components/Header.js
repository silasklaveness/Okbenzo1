"use client";
import React, { useState } from "react";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const buttonStyle = isClick
    ? "transform rotate-180 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 transition-transform duration-300"
    : "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600";

  return (
    <>
      <nav
        className="bg-gray-600 text-white shadow-sm"
        style={{ borderBottom: "1px solid #2d3748" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-3xl hover:text-gray-400">
                Logo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/bestill"
                  className="text-2xl hover:text-gray-400 hover:underline"
                >
                  Bestill
                </a>
                <a
                  href="/omOss"
                  className="text-2xl hover:text-gray-400 hover:underline"
                >
                  OmOss
                </a>
                <a
                  href="/galleri"
                  className="text-2xl hover:text-gray-400 hover:underline"
                >
                  Galleri
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className={buttonStyle} onClick={toggleNavbar}>
                {isClick ? (
                  <svg
                    className="h-6 w-6 transform transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/bestill"
                className="text-2xl block hover:text-gray-400 hover:underline"
              >
                Bestill
              </a>
              <a
                href="/omOss"
                className="text-2xl block hover:text-gray-400 hover:underline"
              >
                OmOss
              </a>
              <a
                href="/galleri"
                className="text-2xl block hover:text-gray-400 hover:underline"
              >
                Galleri
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
