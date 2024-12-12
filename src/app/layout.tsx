import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ólafur Svalur",
  description:
    "Vefsíða fyrir Óla Sval að æfa sig í Next.js og Tailwind CSS o.fl.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Ólafur Svalur</title>
        <meta name="description" content="Verkefnið mitt" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Nav />
        <div className="bg-black flex justify-center  h-screen ">
          <div className=" w-full max-w-3xl px-4 py-8  ">{children}</div>
        </div>
      </body>
    </html>
  );
}
