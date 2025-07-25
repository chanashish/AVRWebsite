import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import { Call, Footer, Navbar, Whatsapp } from "@/components";
import PureVegBanner from "./(home)/components/PureVegBanner";
import RenderChatBot from "@/components/chatbot/RenderChatBot";
import DiscountPopup from "@/components/discountPopup/DiscountPopup";

export const metadata: Metadata = {
  title:
    "Manali Retreat Resort | Wellness Resort in Manali - AnandVardhan Resorts",
  description:
    "Looking for a spiritual resort in Manali? AnandVardhan Resorts offers wellness retreats, guided meditation, spa treatments, and a soulful café experience.",
};

const data = {
  // contact: {
  //   href: "tel:+919317207373",
  //   label: "Call Us",
  //   bgColor: "#365314",
  //   textColor: "#fff",
  // },
  content: {
    discount: 25,
    _html: `<p class="content-para">Luxury stays. Serene views. And up to 25% off <br><span class="purple-purse italic"> just for you!</span></br></p>`,
    // subTitle: "Luxury stays. Serene views. And up to 25% off",
    title: "RESERVE NOW",
    borderColor: "#fff",
  },
  logo: {
    alt: "Luxury Vibe Stay",
    src: "/favicon.ico",
  },
  image: {
    alt: "Luxury Vibe Stay",
    src: "/DiscountImg.jpg",
  },
  whatsApp: {
    href: `https://wa.me/+91${9317207373}?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.`,
    bgColor: "#fff",
    textColor: "#2F4B26",
  },
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
        <DiscountPopup {...data} />
        {children}
        <Footer />
        <Whatsapp whatsAppNumber="9317207373" />
        <Call callNumber="919317207373" />
      </body>
    </html>
  );
}
