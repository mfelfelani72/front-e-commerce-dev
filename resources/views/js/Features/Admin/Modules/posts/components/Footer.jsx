import React, { useState } from "react";


const Footer = ({ className, ...props }) => {
  return (
    <>
      <footer className="bg-white p-5 w-full rounded-t-2xl flex justify-between font-light">
        <div>
          <span>© Copyright Edmate 2024, All Right Reserverd</span>
        </div>
        <div className="flex gap-x-5">
          <a href="#">License</a>
          <a href="#">More Themes</a>
          <a href="#">Documentationns</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
