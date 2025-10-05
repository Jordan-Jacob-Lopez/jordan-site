// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan Lopez",
  description: "Product Manager — fintech, data, and delightful UX",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
