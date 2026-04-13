import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/i18n";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "omo tutorial — oh-my-openagent interactive guide",
  description:
    "Learn how to use oh-my-openagent features: ultrawork mode, discipline agents, hash-anchored editing, and Ralph Loop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <footer className="py-8 border-t border-border">
            <div className="max-w-5xl mx-auto px-6 text-center text-sm text-text-muted">
              <p>
                Built with{" "}
                <a
                  href="https://ohmyopenagent.com"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  oh-my-openagent
                </a>
              </p>
            </div>
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}
