import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something's Cooking | Pankaj",
  description: "Pankaj is cooking something. A new experience is on the way.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}