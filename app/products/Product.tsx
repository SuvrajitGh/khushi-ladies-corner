import Image from "next/image";
import React from "react";
import { products, Product } from "../../data/productData";
import Link from "next/link";

const Products: React.FC = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-2 mx-auto">
        <h1 className="text-gray-700 text-4xl md:text-5xl mb-1 text-center font-prata font-medium">
          Shop by Category
        </h1>
        <p className="text-center mb-10 font-philosopher">
          Browse through your favorite categories. We got them all!
        </p>
        <div className="flex flex-wrap -m-4">
          {products.map((product: Product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/3 w-1/2 p-4">
              {" "}
              {/* Adjusted to w-1/2 for mobile */}
              {/* Wrap the product with Link */}
              <Link
                href={`/products/${product.id}`}
                className="block relative h-48 rounded overflow-hidden"
              >
                <Image
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                  width={256}
                  height={160}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs  tracking-widest title-font mb-1 font-prata">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium font-philosopher">
                  {product.name}
                </h2>
                {/* <p className="mt-1">${product.price.toFixed(2)}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
