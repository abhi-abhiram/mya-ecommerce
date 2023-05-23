import { ClientProvider } from "~/client/trpcClient";
import Header from "~/components/Header";
import "~/styles/globals.css";
import { Merriweather_Sans } from "@next/font/google";

const merriweather_Sans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweather_Sans.variable} font-sans`}>
        <ClientProvider>
          <Header />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
