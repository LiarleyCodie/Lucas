import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas",
  description: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className + ' dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100'}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
