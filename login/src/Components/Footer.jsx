import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer (){
  return (
    <footer className="bg-white text-[#603913] py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto flex justify-between text-sm">
        <div className="w-[30%]">
          <h3 className="text-xl font-bold text-[#C5933A] tracking-wide">COCOCART</h3>
          <p className="mt-4 leading-relaxed">
            CocoCart is India's #1 Omni-channel retailer and official distributor
            of Imported Chocolates. All our products are 100% authentic and
            sourced directly from brands.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-[#603913] hover:opacity-75">
              <FaInstagram className="text-xl text-[#603913]" /></a>
            
            <a href="#" className="text-[#603913] hover:opacity-75">
              <FaFacebookF className="text-xl text-[#603913]" /></a>
            
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">SWEET SELECTIONS</h5>
          <ul className="py-2">
            <li>Milk Chocolates</li>
            <li>Dark Chocolates</li>
            <li>White Chocolates</li>
            <li>Biscuits & Spreads</li>
            <li>Coffee & Hot Chocolate</li>
            <li>Protein & Energy Bars</li>
            <li>Binge Packs</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">USEFUL LINKS</h5>
          <ul className="py-2">
            <li>FAQ</li>
            <li>Track Your Order</li>
            <li>My Account</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return & Refund Policy</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">GET IN TOUCH</h5>
          <p className="mb-2">Phone: <span className="text-[#603913]">18001202278</span></p>
          <p>Email: hello@cococart.com</p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 border-t pt-4 text-[#603913]">
        © 2024 COCOCART VENTURES PVT LTD
      </div>
    </footer>
  );
};

