import React from "react";
import OutlineButton from "./OutlineButton";

const Menu = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-primary py-7">
        <h3 className="font-semibold text-3xl">Collers</h3>
        <div className="flex items-center space-x-8">
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Products
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Solutions
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Pricing
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Resources
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Log In
          </p>
          <OutlineButton label="Sign Up now"/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
