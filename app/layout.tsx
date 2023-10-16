import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextProvider } from "./NextUIProvider";
import QueryProvider from "./queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Summare.ai - AI article summaries",
  description:
    "Get concise summaries of the latest AI research articles and papers with summare.ai. Stay updated quickly!",
  keywords:
    "AI, Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks, Blogs, AI Articles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <NextProvider>{children}</NextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
