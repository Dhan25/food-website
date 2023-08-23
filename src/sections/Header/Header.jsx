import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? " bg-back shadow-sm" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <nav className="relative container mx-auto flex items-center justify-between py-4 px-2">
        <div className="">
          <h4 className="text-xl font-semibold">PinoyEats</h4>
        </div>
        <div className="cursor-pointer flex items-center justify-center w-10 h-12 relative">
          <AiOutlineShoppingCart className="text-2xl text-black" />
          <div className="absolute bg-black text-[0.65rem] w-4 h-4 right-0.5 top-2 flex items-center justify-center rounded-full text-white">
            5
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
