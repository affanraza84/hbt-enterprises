import type { Metadata } from 'next';
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { SearchProvider } from '@/providers/search-provider';
import { SearchSidebar } from '@/components/search/SearchSidebar';
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased bg-neutral-light text-primary font-sans transition-colors duration-300`}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SearchProvider>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 w-full pt-[80px]">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster position="bottom-right" />
              <SearchSidebar />
            </SearchProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
