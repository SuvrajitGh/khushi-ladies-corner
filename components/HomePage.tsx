"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "/weddingbanner.jpg", // Replace with actual image paths
  "/bangleBanner.jpg", // Add more image paths
  "/Hand Ring/ring.jpg",
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
      <header className="w-full shadow-md">
        <div className="container mx-auto flex justify-center h-36 items-center p-4">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-prata tracking-wide text-gray-900">
              Khushi Ladies Corner
            </h1>
            <p className="text-sm tracking-widest text-gray-600">
              RADIATE ELEGANCE WITH
            </p>
          </div>
        </div>
      </header>

      {/* Main Image Section */}
      <main className="relative">
        <div className="relative w-full h-[70vh]">
          {" "}
          {/* Reduced height to 70vh */}
          <Image
            src={images[currentImage]} // Dynamically change the image source
            alt="Eluxee Jewelry Model"
            layout="fill" // Make the image fill the container
            objectFit="cover" // Ensure the image covers the entire container
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
