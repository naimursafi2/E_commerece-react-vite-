import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="pt-20 bg-brand">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3">
          <div>
            <Link to="/">
              <img src="/logo-white.png" alt="logo-white" />
            </Link>
            <h4 className="text-white text-xl font-bold mt-8">Contact Us</h4>
            <div className="mt-5 space-y-5">
              <Link className="flex gap-2.5">
                <BsWhatsapp className="text-white text-xl" />
                <div className=" text-white">
                  <p>Whats App</p>
                  <p>+1 202-918-2132</p>
                </div>
              </Link>
              <Link className="flex gap-2">
                <BiPhone className="text-white text-2xl" />
                <div className=" text-white">
                  <p>Call Us</p>
                  <p>+1 202-918-2132</p>
                </div>
              </Link>
            </div>
            <h4 className="text-white text-xl font-bold mt-8">Download App</h4>
            <div className="flex gap-5 mt-5">
              <Link>
                <img src="/playsotore.png" alt="playsotore" />
              </Link>
              <Link>
                <img src="/applestore.png" alt="applestore" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold border-b-2 w-fit pb-4">
              Most Popular Categories
            </h4>
            <ul className="text-theme font-medium text-base space-y-5 mt-5 list-disc pl-6">
              <li>
                <Link to="/">Staples</Link>
              </li>
              <li>
                <Link to="/">Beverages</Link>
              </li>
              <li>
                <Link to="/">Personal Care</Link>
              </li>
              <li>
                <Link to="/">Home Care</Link>
              </li>
              <li>
                <Link to="/">Baby Care</Link>
              </li>
              <li>
                <Link to="/">Vegetables & Fruits</Link>
              </li>
              <li>
                <Link to="/">Snacks & Foods</Link>
              </li>
              <li>
                <Link to="/">Dairy & Bakery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xl font-bold border-b-2 w-fit pb-4">
              Customer Services
            </h4>
            <ul className="text-theme font-medium text-base space-y-5 mt-5 list-disc pl-6">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Personal Care</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">E-waste Policy</Link>
              </li>
              <li>
                <Link to="/">Cancellation & Return Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-theme text-base font-normal text-center py-7 mt-20 border-t border-t-theme/20">
          <p>© {new Date().getFullYear()} All rights reserved. Reliance Retail Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
