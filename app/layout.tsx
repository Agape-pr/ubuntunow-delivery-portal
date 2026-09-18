import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Portal-only choice (per request, matching a reference design) -- this
// intentionally diverges from the driver app, which still uses Inter.
// Poppins has no variable-font build on Google Fonts, so weights are
// listed explicitly and selected with the usual Tailwind font-weight
// utilities (font-medium, font-bold, ...).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DeliveryOS Portal",
  description: "Delivery portal and admin dashboards for DeliveryOS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
