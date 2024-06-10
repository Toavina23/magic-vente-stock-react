import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import MagicButton from "./magic-button";
import Login from "./login";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] font-[Playfair Display, serif]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-gray-50">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full"
                size="icon"
                variant="ghost"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48"
            >
              <DropdownMenuItem>
                <a
                  className="flex items-center gap-2"
                  href="#"
                >
                  <BellRingIcon className="h-4 w-4" />
                  Anneaux
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  className="flex items-center gap-2"
                  href="#"
                >
                  <WandIcon className="h-4 w-4" />
                  Bâtons
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  className="flex items-center gap-2"
                  href="#"
                >
                  <SwordIcon className="h-4 w-4" />
                  Epées
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  className="flex items-center gap-2"
                  href="#"
                >
                  <CloverIcon className="h-4 w-4" />
                  Capes
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/*
           <Link
            className="flex items-center justify-center"
            href="#"
          >
            <BellRingIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
            <span className="sr-only">Middle-earth Magical Items</span>
          </Link> 
          
          */}
        </div>
        <div className="ml-auto flex items-center gap-4">
          {/* <Input
            className="bg-gray-800 border-gray-700 text-gray-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500 font-[Playfair Display, serif]"
            placeholder="Username"
            type="text"
          />
          <Input
            className="bg-gray-800 border-gray-700 text-gray-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500 font-[Playfair Display, serif]"
            placeholder="Password"
            type="text"
          />
          <Button className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50 font-[Playfair Display, serif] dark:hover:bg-gray-50/90">
            Login
          </Button> */}
          <MagicButton>Se connecter</MagicButton>
        </div>
      </header>
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
                  {/**
                  <Button
                    className="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50 font-[Playfair Display, serif] dark:hover:bg-gray-50/20"
                    variant="outline"
                  >
                    Login
                  </Button>
                 */}
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-[Playfair Display, serif]">
                  Produits du jour
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-[Playfair Display, serif]">
                  Découvrez nos objets magiques les plus populaires et
                  enchanteurs, fabriqué à la main avec le plus grand soin et une
                  attention aux détails.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img
                  alt="One Ring"
                  className="aspect-square rounded-lg object-cover"
                  height="300"
                  src="/one_ring.png"
                  width="300"
                />
                <h3 className="text-lg font-bold font-[Playfair Display, serif]">
                  Un anneau pour tous les gouverner 
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-[Playfair Display, serif]">
                  L'anneau de pouvoir le plus puissant, forgé par le Seigneur
                  des Ténèbres Sauron.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-[Playfair Display, serif]">
                    $999
                  </span>
                  <MagicButton>Acheter ✨</MagicButton>
                </div>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Gandalf's Staff"
                  className="aspect-square rounded-lg object-cover"
                  height="300"
                  src="/gandalf_staff.png"
                  width="300"
                />
                <h3 className="text-lg font-bold font-[Playfair Display, serif]">
                  Le puissant bâton de Gandalf
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-[Playfair Display, serif]">
                  L'ancien bâton brandi par le sorcier Gandalf le Gris.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-[Playfair Display, serif]">
                    $499
                  </span>
                  <MagicButton>Acheter ✨</MagicButton>
                </div>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Andúril, Flame of the West"
                  className="aspect-square rounded-lg object-cover"
                  height="300"
                  src="/anduril.png"
                  width="300"
                />
                <h3 className="text-lg font-bold font-[Playfair Display, serif]">
                  Andúril, Flamme de l'Occident
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-[Playfair Display, serif]">
                  L'épée reforgée d'Elendil, brandie par le roi Aragorn.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-[Playfair Display, serif]">
                    $799
                  </span>
                  <MagicButton>Acheter ✨</MagicButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section login */}
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32  bg-gray-800 text-white">
          <Login></Login>
        </section>
      </main>
    </div>
  );
}

//@ts-ignore
function BellRingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <path d="M4 2C2.8 3.7 2 5.7 2 8" />
      <path d="M22 8c0-2.3-.8-4.3-2-6" />
    </svg>
  );
}

//@ts-ignore
function CloverIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.17 7.83 2 22" />
      <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
      <path d="m7.83 7.83 8.34 8.34" />
    </svg>
  );
}

//@ts-ignore
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
      />
      <line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
      />
      <line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
      />
    </svg>
  );
}

//@ts-ignore
function SwordIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line
        x1="13"
        x2="19"
        y1="19"
        y2="13"
      />
      <line
        x1="16"
        x2="20"
        y1="16"
        y2="20"
      />
      <line
        x1="19"
        x2="21"
        y1="21"
        y2="19"
      />
    </svg>
  );
}

//@ts-ignore
function WandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  );
}
