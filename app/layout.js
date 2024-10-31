import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./_components/Footer";

const geistSans = Outfit({
  subsets: ["latin"]
});

const geistMono = Outfit({
  subsets: ["latin"]
});


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "DH-Home",
  description: "This is home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx-16">
            <Header />
            <Toaster />
            {children}
            <Footer/>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
