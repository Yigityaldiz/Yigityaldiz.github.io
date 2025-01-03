/**
 * Aşağıdaki kod, tailwind kullanarak daha iyi bir responsive tasarım sağlaması amacıyla yeniden düzenlenmiştir.
 * Menü öğeleri ve hamburger simgesi, mobil cihazlarda görünür olacak şekilde ayarlanmıştır.
 * Masaüstü cihazlarda ise varsayılan yatay navigasyon görünümü korunmuştur.
 */

// Start of Selection
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import ConnectWalletButton from "../connect-wallet";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-transparent w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/assets/images/logos/eduquiz-white.png"
          alt="Eduquiz"
          className="h-12 w-auto"
        />
      </div>

      {/* Masaüstü Menü */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white/50">
          <li>
            <a href="/" className="hover:text-white transition-colors">
              How It Works?
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-white transition-colors">
              Features
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobil Menü */}
      <div className="md:hidden flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-col items-end space-y-1">
            <div className="h-[2px] w-6 bg-white"></div>
            <div className="h-[2px] w-6 bg-white"></div>
            <div className="h-[2px] w-6 bg-white"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#060a1e] w-48 z-50 p-3 text-white border border-gray-600 rounded-md mt-2">
            <DropdownMenuLabel className="text-white">Menü</DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1 border-b border-white/10" />
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10 rounded px-2 py-1">
              How It Works?
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10 rounded px-2 py-1">
              Features
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-1 border-b border-white/10" />
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10 rounded px-2 py-1">
              Profile
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Cüzdan Butonu */}
      <ConnectWalletButton />
    </header>
  );
}
