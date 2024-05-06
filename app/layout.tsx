import type { Metadata, Viewport } from "next";
import { inter, fontMono, plusJakartaSans } from "@/lib/fonts";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  GalleryVertical,
  Home,
  MessageSquare,
  MessagesSquare,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.ico" />
      </head>

      <body
        className={cn(
          "bg-background font-sans antialiased text-foreground h-[100dvh] relative",
          plusJakartaSans.variable
        )}
      >
        <nav className="sticky top-0 hidden sm:flex z-50 bg-red-500 ">Home</nav>
        {/* desktop nav */}
        <nav
          id="nav-mobile"
          className="fixed flex bottom-0 left-1/2 -translate-x-1/2 z-50 sm:hidden mb-2 p-1  items-center rounded-full border-primary/50 border"
        >
          <div className="flex gap-6 justify-between items-center ml-4">
            <Link href="/" className="flex flex-col items-center text-xs ">
              <Home size={28} strokeWidth={1.5} />
            </Link>
            <Link
              href="/portfolio"
              className="flex flex-col items-center text-xs "
            >
              <GalleryVertical size={28} strokeWidth={1.5} />
            </Link>
            <Link
              href="/om-mig"
              className="flex flex-col items-center text-xs "
            >
              <User size={28} strokeWidth={1.5} />
            </Link>
            <Link
              href="/kontakt"
              className="p-2 flex flex-col items-center text-xs bg-primary rounded-full"
            >
              <MessageSquare size={28} strokeWidth={1.5} />
            </Link>
          </div>

          {/* <Button asChild className="rounded-full !h-10 m-0">
            <Link href="/kontakt">Kontakt mig</Link>
          </Button> */}
        </nav>
        {/* mobile nav */}
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
