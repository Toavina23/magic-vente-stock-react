import MagicButton from "./magic-button";
import Login from "./login";
import ProductsOfTheDay from "./products-of-the-day";
import Header from "./header";
import { useRef } from "react";

export function Home() {
  const loginRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col min-h-[100dvh] font-[Playfair Display, serif]">
      <Header loginRef={loginRef}></Header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-900 text-gray-50">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-[Playfair Display, serif]">
                  Découvrez les merveilles magiques de la Terre du Milieu
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400 font-[Playfair Display, serif]">
                  Explorez notre collection d'objets magiques authentiques
                  fabriqués à la main inspiré du monde du Seigneur des Anneaux.
                </p>
                <div className="space-x-4 mt-6">
                  <MagicButton>Decouvrir plus de magie</MagicButton>
                </div>
              </div>
              <img
                alt="Rivendell"
                className="mx-auto aspect-[21/9] overflow-hidden rounded-t-xl object-cover"
                height="600"
                src="/rivendell.png"
                width="1270"
              />
            </div>
          </div>
        </section>
        {/* Section produit du jour */}
        <ProductsOfTheDay></ProductsOfTheDay>
        {/* Section login */}
        <section
          ref={loginRef}
          className="flex justify-center w-full py-12 md:py-24 lg:py-32  bg-gray-800 text-white"
        >
          <Login></Login>
        </section>
      </main>
    </div>
  );
}
