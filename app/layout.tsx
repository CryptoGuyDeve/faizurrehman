import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandMenu } from "@/components/command-menu";
import { CommandHint } from "@/components/command-hint";

// Replace Geist with Roboto Mono
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faizurrehman.vercel.app"),
  title: "FaizBuildsStuff | Faizur Rehman - Full Stack Developer",
  description:
    "FaizBuildsStuff (Faizur Rehman). Frontend engineer and UI designer building premium digital experiences, unique web apps, and design systems.",

  keywords: [
    "FaizBuildsStuff",
    "Faizur Rehman",
    "frontend engineer",
    "software engineer",
    "creative developer",
    "Next.js",
    "Tailwind CSS",
    "React",
    "TypeScript",
    "portfolio"
  ],

  authors: [{ name: "Faizur Rehman", url: "https://faizurrehman.vercel.app" }],

  openGraph: {
    title: "FaizBuildsStuff | Full Stack Developer",
    description: "Building premium digital experiences and design systems.",
    siteName: "FaizBuildsStuff",
    locale: "en_US",
    type: "website",
    url: "https://faizurrehman.vercel.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "FaizBuildsStuff",
    description: "Building premium digital experiences and design systems.",
    creator: "@Faiz_Rrhman",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Faizur Rehman",
    "alternateName": "FaizBuildsStuff",
    "url": "https://faizurrehman.vercel.app",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://github.com/CryptoGuyDeve",
      "https://x.com/Faiz_Rrhman",
      "https://www.linkedin.com/in/faizurrehman"
    ],
    "description": "Frontend engineer and UI designer building premium digital experiences."
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CommandMenu />
          <CommandHint />
        </ThemeProvider>
      </body>
    </html>
  );
}
