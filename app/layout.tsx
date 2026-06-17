import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amazon Publisher House | Professional Book Publishing Services",
    template: "%s | Amazon Publisher House"
  },
  description: "Amazon Publisher House provides professional book publishing, writing, editing, formatting, and marketing services to help authors publish on Amazon KDP.",
  keywords: [
    "Amazon Publisher House",
    "book publishing services",
    "Amazon KDP publishing",
    "book writing services",
    "ghostwriting",
    "book marketing",
    "book editing",
    "proofreading",
    "publish a book on Amazon"
  ],
  authors: [{ name: "Amazon Publisher House" }],
  openGraph: {
    title: "Amazon Publisher House | Professional Book Publishing Services",
    description: "Professional book publishing services — from manuscript to market. We write, edit, design, format, publish, and market your book.",
    type: "website",
    locale: "en_US",
    siteName: "Amazon Publisher House",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Publisher House | Professional Book Publishing & Writing Services",
    description: "Professional book publishing services — from manuscript to market. We write, edit, design, format, publish, and market your book.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script id="tawk-to-chat" strategy="lazyOnload">
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a2b6289d6a95f1c2c58b955/1jqsnhr25';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
  `}
        </Script>
      </body>
    </html>
  );
}
