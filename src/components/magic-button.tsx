import { Button } from "@/components/ui/button";
import React from "react";

export default function MagicButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className="relative overflow-hidden rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:from-indigo-600 dark:to-purple-600"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 transition-opacity duration-300 group-hover:opacity-50" />
    </Button>
  );
}
