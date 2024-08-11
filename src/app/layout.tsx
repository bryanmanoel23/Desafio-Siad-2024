import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"] ,
  weight: '400',
  variable: '--font-famyle-inter'
});

export const metadata: Metadata = {
  title: "Desafio Siad - 2024",
  description: "desafio para Front-End SIAD 2024/02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
      <meta charSet="UTF-8"/>
      </head>
      <body className="bg-branco">{children}</body>
    </html>
  );
}

