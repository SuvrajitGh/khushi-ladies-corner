"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const RotatingBackground = () => {
  // Define the images you want to rotate
  const backgroundImages = [
    "/footerbg.jpg", // Add your image paths in the public folder
    "/ankelet.jpeg", // Add your image paths in the public folder
    "/Hand Ring/handringbanner.jpg", // Add your image paths in the public folder
    "/Bangles/banglebanner.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set interval for image rotation (change every 5 seconds)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Rotate every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [backgroundImages.length]);

  return (
    <section className="relative flex items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[500px] lg:min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px]">
        <Image
          src={backgroundImages[currentImageIndex]} // Dynamically load images
          alt="Rotating background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text Content */}
      {/* <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-black">
          Renowned for her distinctive sculptural, organic aesthetic, the
          captivating jewelry of visionary designer Elsa Peretti is irresistibly
          sensual and tactile. Peretti’s iconic designs are as modern today as
          ever.
        </p>
      </div> */}
    </section>
  );
};

export default RotatingBackground;
