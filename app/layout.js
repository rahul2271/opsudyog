import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
// Poppins for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Lato for body
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "OPS Udyog",
  description: "Engineering Tomorrow’s Machinery, Today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} antialiased`}>
        <Header />   {/* ✅ Fixed */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
