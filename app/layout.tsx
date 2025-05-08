import React from "react";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
// Load Poppins font with specific weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "NewEast - Quality Auto Parts & Accessories",
  description:
    "Find the perfect parts for your vehicle with our extensive catalog and expert support.",
  icons: {
    icon: "https://nesteastgt.s3.eu-west-2.amazonaws.com/paperless/1b159ec4b93_ne.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  font-sans ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
