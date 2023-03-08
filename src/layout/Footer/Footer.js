import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo_transparent.png'
const Footer = () => {
    return (
        <>
            <footer className=" py-12 bg-gray-900">
                <div className="myLogo  container">
                    <img src={logo} className='w-12' alt="logo" />
                    <span className="text-white-50">Flashye</span>
                </div>
                <div className="footer-content gap-4 pt-3 align-items-center text-center-xs text-left-md    justify-content-around d-flex flex-wrap text-white container">
                    <a href="https://goo.gl/maps/G3hpEALJWFSCXKhNA"   className="loction text-white text-decoration-none d-flex col-12 col-md-6 gap-3 col-lg-4">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore et magna aliqua
                        </p>
                    </a>
                    <ul className="list-group col-12 col-md-6 col-lg-2">
                        <li>
                            <i className="fa-solid fa-phone-volume"></i>
                            <a
                                className="ms-2 btn text-white hovre:text-lime-600"
                                href="https://api.whatsapp.com/send?phone=01028876202"
                            >
                                +20-102-8876-202
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <a
                                className="ms-2 btn text-white hovre:text-lime-600"
                                href="mailto: mahmoud18957321@gamil.com"
                            >
                                xeample@flashye.com
                            </a>
                        </li>
                    </ul>
                    <ul className="list-group col-12 col-md-6 col-lg-2">
                        <li>
                            <Link
                                className="btn border-none text-white hovre:text-lime-600"
                                to="/cart"
                            >
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="btn border-none text-white hovre:text-lime-600"
                                to="/products"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-group d-flex gap-2  flex-row list-none ">
                        <li className=" text-center w-30 col   p-2 hovre:text-lime-600 text-lg rounded-circle text-whier  ">
                            <a href="https://www.facebook.com/profile.php?id=100011192833917">
                                <i className="text-white fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className=" text-center w-30 col  p-2 hovre:text-lime-600 text-lg rounded-circle text-whier">
                            <a href="https://twitter.com/Mahmoud02136886">
                                <i className=" text-white fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li className="  text-center w-30 col  p-2 text-lg rounded-circle text-whier">
                            <a className="text-white" href="https://www.instagram.com/mahmoudabdallah6158/">
                                <i className="  fa-brands fa-instagram hovre:text-lime-600 text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;