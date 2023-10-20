import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextProvider } from "./providers/NextProvider";
import QueryProvider from "./providers/QueryProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Summare.ai - AI article summaries",
  metadataBase: new URL("https://summare-ai.vercel.app"),
  description:
    "Get concise summaries of the latest AI research articles and papers with summare.ai. Stay updated quickly!",
  keywords:
    "AI, Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks, Blogs, AI Articles",
  robots: "index,follow",
  openGraph: {
    title: "Summare.ai - AI article summaries",
    description:
      "Get concise summaries of the latest AI research articles and papers with summare.ai. Stay updated quickly!",
    type: "website",
    locale: "en_US",
    url: "https://summare-ai.vercel.app",
    siteName: "Summare.ai - AI article summaries",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Get concise summaries of the latest AI research articles and papers with summare.ai. Stay updated quickly!",
    title: "Summare.ai - AI article summaries",
    site: "Summare.ai - AI article summaries",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <meta
        name="description"
        content="Get concise summaries of the latest AI research articles and papers with summare.ai. Stay updated quickly!"
      />
      <body className={inter.className}>
        <Toaster />
        <QueryProvider>
          <NextProvider>{children}</NextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
