import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Matches the driver app's font (see deliverOs-fe/constants/theme.ts).
// Inter is loaded as a variable font here, so weight is set with the
// standard Tailwind font-weight utilities (font-medium, font-bold, ...)
// rather than the per-weight family hack the RN app needs.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeliveryOS Portal",
  description: "Delivery portal and admin dashboards for DeliveryOS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
