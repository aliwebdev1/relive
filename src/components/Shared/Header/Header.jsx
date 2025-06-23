import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/icons/user.png";
import cart from "../../../assets/images/icons/cart.png";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <NavLink className="text-gray" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray" to="/about">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray" to="/shop">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray" to="/">
          What are peptides
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray" to="/contact">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray" to="/">
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar md:px-30 bg-white fixed top-0 left-0 right-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-primary text-white mr-10 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img className="" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/cart"
          className="border-2 border-secondary rounded-full w-12 h-12 flex justify-center items-center me-4"
        >
          <img className="w-5 h-5" src={cart} alt="" />
        </Link>
        <Link
          to="/login"
          className="border-2 border-secondary rounded-full w-12 h-12 flex justify-center items-center "
        >
          <img className="w-5 h-5" src={user} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
