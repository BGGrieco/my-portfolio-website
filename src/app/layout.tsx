import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/default";
// import NavBar from "./components/navBar/default";

const wSans = Work_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  openGraph: {
    title: "Brian Grieco UX",
    description:
      "Official website of UX Researcher, UI Designer, and Front-end Developer Brian Grieco.",
    url: "https://bggrieco.github.io/",
    siteName: "Brian Grieco UX",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "Brian grieco Portfolio OG Image",
      },
    ],
    locale: "en_IRL",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={wSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
