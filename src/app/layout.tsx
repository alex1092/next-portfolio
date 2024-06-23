import type { Metadata } from "next";

import { Miriam_Libre } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Alex Little",
  description: "Alex Little's personal website",
};

const miriamLibre = Miriam_Libre({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(miriamLibre.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <NavBar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
