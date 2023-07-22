import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useOnline from "../../src/hooks/useOnline";
import Logo7 from "../assets/images/logo7.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbDiscount2 } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import SearchProduct from "./SearchProduct";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/products" className="py-2 hover:text-[#8badd7]">
        Home
      </NavLink>
      <NavLink to="/cart" className="py-2 hover:text-[#8badd7]">
        Cart
      </NavLink>
      <NavLink to="/profile" className="py-2 hover:text-[#8badd7]">
        Profile
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const isOnline = useOnline();
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);
  return (
    <>
      <div className="flex md:gap-5 lg:gap-0 justify-between pt-10 pb-4 bg-[#232f3e]  text-[#d6d6d6]  max-sm:flex-wrap  max-sm:px-5 lg:pl-28 md:px-14 sm:px-10 ">
        <div className="max-sm:w-2/12  max-sm:pl-2 sm:w-1/12 md:w-3/12 lg:w-2/12 lg:px-0  ">
          <NavLink to="/products">
          <div className="flex">
          <img src="public/logo.svg" alt="logo" className="text-white w-12 max-sm:w-11"/>
          </div>
        </NavLink>
        {/* <div className="border-2 border-black flex ml-16 font-figtree text-[#7c9abd] -mt-1 w-2/12  max-sm:hidden max-md:hidden  max-lg:w-1/12 max-xl:w-2/12  max-lg:mx-0 max-xl:mx-0 ">
        <IoLocationOutline size={35} className="mt-1 max-lg:hidden" />
        <div className=" flex flex-col leading-4 mt-1 pt-1 max-lg:text-xs">
          <p className="text-[#7c9abd]">FAST</p>
          <p className="text-[#7c9abd] ">DELIVERY</p>
        </div>
      </div> */}
        </div>
        <div className="md:w-5/12">
          <SearchProduct />
        </div>
        <div className="text-lg sm:w-5/12 md:w-4/12 md:px-0 md:pb-0 lg:px-8 lg:pb-5  max-sm:hidden flex justify-between items-center font-comic font-semibold ">
          <NavLink to="/products" className="flex hover:text-[#8badd7]">
            Home
          </NavLink>
          <NavLink to="/cart" className="flex hover:text-[#8badd7] ">
            {<AiOutlineShoppingCart className="lg:w-7 lg:h-7 sm:h-6 sm:w-6"/>}-{" "}
            {totalQuantity}
          </NavLink>
          <NavLink to="/profile" className="flex hover:text-[#8badd7]">
            {
              <MdOutlinePersonOutline
                className="mt-1 max-md:hidden lg:w-7 lg:h-7 sm:h-6 sm:w-6"
              />
            }{" "}
            <span className=" mt-1 ">Profile</span>
            <p className="pt-2 pl-2 text-sm max-md:hidden">
              {isOnline ? "🟢" : "🔴"}
            </p>
          </NavLink>
        </div>
        <div className="sm:hidden  mx-5">
          <button
            type="button"
            onClick={toggleNavbar}
            className="text-[#7c9abd] mt-1"
          >
            {!isOpen ? <IoMenu size={32} /> : <IoClose size={32} />}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center basis-full text-xl font-comic font-semibold mx-10 my-5 sm:hidden">
            <NavLinks />
          </div>
        )}
      </div>
      
    </>
  );
};

export default Navbar;
