import { products } from "../../../data/productData";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const productId = parseInt(params.id);
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    notFound();
    return null;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-6 mx-auto">
        {/* Product Variations */}
        {product.variations && product.variations.length > 0 && (
          <div className="pt-10">
            <h2 className="text-5xl  mb-4 font-prata">
              Collections
            </h2>
            <div className="flex flex-wrap -m-4">
              {product.variations.map((variation) => (
                <div key={variation.id} className="lg:w-1/4 md:w-1/2 w-1/2 p-4">
                  <div className="block relative h-48 rounded overflow-hidden">
                    <Image
                      alt={variation.name}
                      className="object-cover object-center w-full h-full block"
                      src={variation.image}
                      width={256}
                      height={160}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Generate static paths for each product
export async function generateStaticParams() {
  return products.map((product) => ({
    params: { id: product.id.toString() },
  }));
}
