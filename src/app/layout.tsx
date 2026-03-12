import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Integrations Marketplace",
  description: "Browse dozens of integrations to connect calendars, CRMs, payment processors, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var nav = performance.getEntriesByType("navigation")[0];
                if (nav && nav.type === "reload") {
                  localStorage.removeItem("connectedIntegrations");
                  if (window.location.pathname !== "/") {
                    window.location.replace("/");
                  }
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
