import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import FetchDataWrapper from "@/components/fetch-data-wrapper";
import Footer from "@/components/layout/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Hyku",
    default: "Hyku",
  },
  description:
    "The Next Generation Repository Solution - A Samvera Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      <body className={`${openSans.className} antialiased`}>
        <ThemeProvider attribute="class">
          <FetchDataWrapper>
            <Header />
            {children}
            <Footer />
          </FetchDataWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
