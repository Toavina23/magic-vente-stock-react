import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  BellRingIcon,
  CloverIcon,
  MenuIcon,
  SwordIcon,
  WandIcon,
} from "lucide-react";
import MagicButton from "./magic-button";
import React from "react";

export default function Header({
  loginRef,
}: {
  loginRef: React.RefObject<HTMLDivElement>;
}) {
  function onLoginButtonClicked() {
    loginRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  return (
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
      </div>
      <div className="ml-auto flex items-center gap-4">
        <MagicButton onClick={onLoginButtonClicked}>Se connecter</MagicButton>
      </div>
    </header>
  );
}
