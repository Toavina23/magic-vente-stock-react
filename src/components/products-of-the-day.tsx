import { useEffect, useState } from "react";
import { Product, fetchProductOfTheDay } from "@/services/product-service";
import ProductCard from "./product-card";

export default function ProductsOfTheDay() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);
  useEffect(() => {
    async function getProductsOfTheDay() {
      const products = await fetchProductOfTheDay();
      setProducts(products);
    }
    getProductsOfTheDay();
  }, []);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-[Playfair Display, serif]">
              Produits du jour
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-[Playfair Display, serif]">
              Découvrez nos objets magiques les plus populaires et enchanteurs,
              fabriqué à la main avec le plus grand soin et une attention aux
              détails.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {products.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.id}
              ></ProductCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
