import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import { Call, Footer, Navbar, Whatsapp } from "@/components";
import PureVegBanner from "./(home)/components/PureVegBanner";
import RenderChatBot from "@/components/chatbot/RenderChatBot";

export const metadata: Metadata = {
  title:
    "Manali Retreat Resort | Wellness Resort in Manali - AnandVardhan Resorts",
  description:
    "Looking for a spiritual resort in Manali? AnandVardhan Resorts offers wellness retreats, guided meditation, spa treatments, and a soulful café experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="AI8uiz0tsMf569ZnqOVsiTjO-HxasZqwK77F_sYcLrA"
        />
        {/* <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZX33V7B"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Y5YZX33V7B'); </script> */}

        {/* <script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "Organization",
"name": "Anand Vardhan Resort Manali",
"url": "https://anandvardhanresorts.com/",
"logo": "",
"sameAs": [
"https://www.facebook.com/AnandVardhanResortsManali/",
"https://www.instagram.com/anandvardhanresortmanali/",
"https://www.linkedin.com/company/anand-vardhan-resort/"
]
}
</script> */}

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Anand Vardhan Resort Manali",
              "url": "https://anandvardhanresorts.com/",
              "logo": "",
              "sameAs": [
              "https://www.facebook.com/AnandVardhanResortsManali/",
              "https://www.instagram.com/anandvardhanresortmanali/",
              "https://www.linkedin.com/company/anand-vardhan-resort/"
              ]
            }
            `,
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZX33V7B"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y5YZX33V7B');
            `,
          }}
        />

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
      <body className={``} suppressHydrationWarning={true}>
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
