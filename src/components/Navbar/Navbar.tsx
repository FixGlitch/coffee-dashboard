"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

export function Navbar() {
  const pathname = usePathname();
  const isEcommercePage = pathname.startsWith("/ecommerce");

  return (
    <header className="w-full border-b bg-white">
      <div className="flex h-28 items-center justify-around px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            width={100}
            height={100}
            alt="Colada Coffee Logo"
          />
        </Link>

        {isEcommercePage ? (
          <>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/tienda"
                className="text-sm font-medium hover:text-primary"
              >
                Ofertas
              </Link>
              <Link
                href="/nosotros"
                className="text-sm font-medium hover:text-primary"
              >
                Recientemente agregados
              </Link>
              <Link
                href="#opiniones-de-clientes"
                className="text-sm font-medium hover:text-primary"
              >
                Opiniones de clientes
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <form className="hidden lg:block relative w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-8"
                  type="search"
                />
              </form>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Favoritos"
              >
                <Heart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  0
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  0
                </span>
              </Button>
            </div>
          </>
        ) : (
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/#about-us"
              className="transition-colors hover:text-foreground/80"
            >
              About Us
            </Link>
            <Link
              href="/#events"
              className="transition-colors hover:text-foreground/80"
            >
              Events
            </Link>
            <Link
              href="/book-our-mobile-bar"
              className="transition-colors hover:text-foreground/80"
            >
              Book Our Mobile Bar
            </Link>
            <Link
              href="/ecommerce"
              className="transition-colors hover:text-foreground/80"
            >
              Ecommerce
            </Link>
          </nav>
        )}

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
