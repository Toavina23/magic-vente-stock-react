import { type Product } from "@/services/product-service";
import MagicButton from "./magic-button";
import { Card, CardContent, CardFooter } from "./ui/card";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="bg-gray-800 text-gray-50 border-none pt-6">
      {/*<CardHeader>
         <img
          alt="One Ring"
          className="aspect-square rounded-lg object-cover"
          height="300"
          src="/one_ring.png"
          width="300"
        />       
        </CardHeader> */}
      <CardContent>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold font-[Playfair Display, serif]">
            {product.libelle}
          </h3>
          {/*<p className="text-sm text-gray-500 dark:text-gray-400 font-[Playfair Display, serif]">
        {product.description}
      </p> */}
          <p className="text-sm text-gray-500 dark:text-gray-400 font-[Playfair Display, serif]">
            Quantité restant en stock: {product.quantiteStock}
          </p>
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-between">
        <span className="text-2xl font-bold font-[Playfair Display, serif]">
          $ {product.prix}
        </span>
        <MagicButton>Acheter ✨</MagicButton>
      </CardFooter>
    </Card>
  );
}
