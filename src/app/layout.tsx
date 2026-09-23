import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { projectInfo } from "@/data/project-page";

import "./globals.css";

const description = projectInfo.description;

export const metadata: Metadata = {
  title: {
    default: projectInfo.name,
    template: "%s | " + projectInfo.name,
  },
  description,
  applicationName: projectInfo.name,
  creator: projectInfo.team,
  openGraph: {
    title: projectInfo.name,
    description,
    siteName: projectInfo.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: projectInfo.name,
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f17" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
