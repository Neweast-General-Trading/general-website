import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/public/assets/Images/logo.png";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gray-950 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm font-semibold">
          🚀 Discover unbeatable deals at Neweast General Trading! Quality
          products at the best prices.{" "}
          <Link
            href="https://ksa.neweast.cloud/"
            className="underline hover:text-red-600"
            target="_blank"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} width={180} height={100} alt={"NewEast Logo"} />
            </Link>
            <div className="flex items-center justify-between">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center mx-5 gap-8">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-red-600 transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-red-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-red-600 transition-colors"
                >
                  Contact Us
                </Link>
              </nav>

              {/* Search and Actions */}
              <div className="flex items-center gap-4">
                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <nav className="flex flex-col gap-4">
                      <Link
                        href="/"
                        className="text-lg font-medium hover:text-red-600 transition-colors"
                      >
                        Home
                      </Link>

                      <Link
                        href="/about"
                        className="text-lg font-medium hover:text-red-600 transition-colors"
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="text-lg font-medium hover:text-red-600 transition-colors"
                      >
                        Contact Us
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
