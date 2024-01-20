import Providers from "@/components/Providers";
import Sidebar from "@/components/Sidebar";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Dashboard | Wodociągi",
  description: "Aplikacja do zarządzania systemem wodociągowym.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/water-icon.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/water-icon.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
            themes: ["light", "dark"],
          }}
        >
          <div className="h-screen flex">
            {/* <Topbar /> */}
            <Sidebar />
            <div className="w-full h-full relative flex flex-col">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
