import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.scss";
import { Call, Footer, Navbar, Whatsapp } from "@/components";
import PureVegBanner from "./(home)/components/PureVegBanner";
import RenderChatBot from "@/components/chatbot/RenderChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anand Vardhan Resort",
  description:
    "Unwind with fascinating views of the mountains at our resort offering cosy rooms, a restaurant, outdoor activities and world-class facilities.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T8NF9RC');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${geistSans.variable} ${nunito.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8NF9RC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <RenderChatBot />
        <PureVegBanner />
        <Navbar />
        {children}
        <Footer />
        <Whatsapp whatsAppNumber="9317207373" />
        <Call callNumber="919317207373" />
      </body>
    </html>
  );
}
