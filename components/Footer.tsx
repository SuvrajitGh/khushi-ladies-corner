import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-800">
        <div className="container px-2 py-5 mx-auto relative z-10 flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image src="/klc-logo.png" width={70} height={25} alt="logo" />
            <span className="ml-3 text-xl text-gray-500">
              Khushi Ladies Corner
            </span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Khushi Ladies Corner
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="#" className="ml-3 text-gray-500">
              <Instagram className="w-5 h-5" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
