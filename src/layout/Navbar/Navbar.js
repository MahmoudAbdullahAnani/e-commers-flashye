import React from "react";
import logo from '../../Images/logo_transparent.png'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


import { motion } from "framer-motion";

const Navbar = () => {
    const cartProductVall = useSelector(store => store.cartProducts)
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <motion.span
              initial={{ x: "-100vw", opacity: 0 }}
              transition={{ duration: 0.4, damping: 50 }}
              animate={{ x: 0, opacity: 1 }}
              aria-label="logo"
              className="navbar-brand w-12 d-flex cursor-default align-items-center text-white"
              href="/#"
            >
              <img src={logo} className="w-100" alt="flashye" />
              Flashye
            </motion.span>
            <motion.button
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, damping: 50 }}
              className="navbar-toggler border-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars-staggered text-white"></i>
            </motion.button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="btn border-none border-0 text-white fs-5   "
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn border-none border-0 text-white fs-5"
                    to="/cart"
                  >
                    Carts
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <NavLink to="/cart">
                <motion.button
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, damping: 50 }}
                  className=""
                >
                  <span className="text-white bg-danger relative left-2 top-2 px-2 rounded-circle">
                    {cartProductVall.length > 0 ? cartProductVall.length : "😃"}
                  </span>
                  <i className="fa-solid text-white fa-bag-shopping  fs-3 "></i>
                </motion.button>
              </NavLink>
              <NavLink to="/user">
                <button className="">
                  <i className="fa-solid text-white fa-user ms-4 fs-4  "></i>
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;