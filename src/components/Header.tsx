import { AlignJustifyIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between backdrop-blur-md">
      <h1 className="text-xl font-extrabold">코끼리</h1>
      <AlignJustifyIcon />
    </header>
  );
};
