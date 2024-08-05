import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/lib/UiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Referral To Earn",
  description: "",
  keywords:[""],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
