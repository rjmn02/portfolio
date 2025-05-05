import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A beautiful portfolio template built with Shadcn UI, Tailwind CSS 4, and Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`} id="hero-background">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Script
              src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
              strategy="beforeInteractive"
              />
              <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
                strategy="beforeInteractive"
              />

              <Script id="script">
                    {`VANTA.NET({
                      el: "#hero-background",
                      mouseControls: true,
                      touchControls: true,
                      gyroControls: false,
                      minHeight: 200.00,
                      minWidth: 200.00,
                      scale: 1.00,
                      scaleMobile: 1.00,
                      color: 0x7405f5,
                      backgroundColor: 221e21,
                      points: 11.00,
                      maxDistance: 15.00,
                      spacing: 20.00
                    })`}
              </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
