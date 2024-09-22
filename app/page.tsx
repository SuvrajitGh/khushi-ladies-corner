import Footer from "@/components/Footer";
import Products from "./products/Product";
import Features from "@/components/Features";
import "@fontsource/playfair-display";
import HomePage from "@/components/HomePage";
// import Hero from "@/components/Hero";
// import RotatingBackground from "@/components/RotatingBanner";
// import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="">
        {/* <Header /> */}
        {/* <Hero /> */}
        {/* <RotatingBackground /> */}
        <HomePage />
        <Products />
        <Features />
        <Footer />
      </div>
    </>
  );
}
