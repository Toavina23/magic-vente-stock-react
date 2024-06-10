import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="relative mx-4 w-full max-w-4xl rounded-2xl bg-[#1a1a1a]/80 p-6 backdrop-blur-lg sm:p-8 grid grid-cols-2 gap-8">
      <div className="relative z-10 space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Bienvenu en terre magique
          </h1>
          <p className="text-[#d8bfd8]">Entrez vos informations y accéder.</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-[#d8bfd8]"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="frodo@shire.com"
              className="bg-[#1a1a1a] text-[#d8bfd8]"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-[#d8bfd8]"
              >
                Mot magique secret
              </Label>
              <a
                href="#"
                className="text-sm font-medium text-[#9370db] hover:underline"
              >
                Mot magique secret oublié ?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              className="bg-[#1a1a1a] text-[#d8bfd8]"
            />
          </div>
          <Button
            className=" w-full relative overflow-hidden rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:from-indigo-600 dark:to-purple-600"
          >
            Se connecter
          </Button>
        </form>
        <div className="text-center text-sm text-[#d8bfd8]">
          Vous n'êtes pas encore membre ?{" "}
          <a
            href="#"
            className="font-medium text-[#9370db] hover:underline"
          >
            S'inscrire 
          </a>
        </div>
      </div>
      <div className="relative z-10 space-y-4">
        <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-3 text-6xl text-[#1a1a1a]">
          🧙‍♂️
        </div>
        <div className="absolute -bottom-8 -right-8 h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-3 text-6xl text-[#1a1a1a]">
          🐉
        </div>
        <img
          src="/magic_vente_stock.jpg"
          alt="Arda Merch"
          width={600}
          height={600}
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
