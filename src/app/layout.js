import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iron Goose",
  description: "Premium digital solutions for businesses that want to stand out and scale.",
  openGraph: {
    title: "Iron Goose",
    description: "Premium digital solutions for businesses that want to stand out and scale.",
    images: [
      {
        url: "/images/landing_page.jpeg",
        alt: "Iron Goose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Goose",
    description: "Premium digital solutions for businesses that want to stand out and scale.",
    images: ["/images/landing_page.jpeg"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
