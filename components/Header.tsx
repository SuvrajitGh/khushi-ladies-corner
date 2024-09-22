import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex items-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center md:mb-0">
          <Image src={"/klc-logo.png"} width={80} height={80} alt="logo" />
        </a>
        {/* <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div> */}
      </div>
      <div className="flex justify-center mx-8">
        <div className="border w-full" />
      </div>
    </header>
  );
};

export default Header;
