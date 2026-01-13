import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { SearchProvider } from '@/providers/search-provider';
import { SearchSidebar } from '@/components/search/SearchSidebar';
import { ThemeProvider } from "@/providers/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <SearchProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <SearchSidebar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
