import { Call, Navbar, Whatsapp } from "@/components";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import "./animation.scss";

import Footer from "@/components/Footer/Footer";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { WebsiteProvider } from "@/context/WebsiteContext";
import FullscreenImagePopup1 from "@/components/FullscreenImagePopup1";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title:
    "Manali Retreat Resort | Wellness Resort in Manali - AnandVardhan Resorts",
  description:
    "Looking for a spiritual resort in Manali? AnandVardhan Resorts offers wellness retreats, guided meditation, spa treatments, and a soulful café experience.",
};

// const data = {
//   content: {
//     discount: 25,
//     _html: `<p class="content-para">Luxury stays. Serene views. And up to 25% off <br><span class="purple-purse italic"> just for you!</span></br></p>`,
//     // subTitle: "Luxury stays. Serene views. And up to 25% off",
//     title: "RESERVE NOW",
//     borderColor: "#fff",
//   },
//   logo: {
//     alt: "Luxury Vibe Stay",
//     src: "/favicon.ico",
//   },
//   image: {
//     alt: "Luxury Vibe Stay",
//     src: "/DiscountImg.jpg",
//   },
//   whatsApp: {
//     href: `https://wa.me/+91${9317207373}?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.`,
//     bgColor: "#fff",
//     textColor: "#2F4B26",
//   },
// };

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

        {/* <Script
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
          strategy="lazyOnload"
        /> */}

        <Script
          id="anand-vardhan-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Resort",
                  "@id": "https://anandvardhanresorts.com/#resort",
                  name: "Anand Vardhan Resort",
                  url: "https://anandvardhanresorts.com/",
                  description:
                    "Pure-veg wellness resort in Naggar/Manali offering deluxe & luxury suites, vegetarian dining (Govind Prasadam), spa, yoga & meditation, naturopathy, kids play area, adventure activities and bonfire evenings.",
                  email: "sales@anandvardhanresorts.com",
                  telephone: "‪+91-93172-07373‬",
                  checkinTime: "14:00",
                  checkoutTime: "12:00",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Village, Ghurdaur PO Larakelo, Kullu Naggar, Manali Road",
                    addressLocality: "Manali",
                    addressRegion: "Himachal Pradesh",
                    postalCode: "175104",
                    addressCountry: "IN",
                  },
                  amenityFeature: [
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Parking Space",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Free WiFi",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Room Service",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Conference Room",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Vegetarian Restaurant (Govind Prasadam)",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Cafe / Open Air Cafe",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Spa / Panchkarma / Naturopathy",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Steam & Sauna",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Kids Play Area",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Adventure Park / Zipline / Trekking / Cycling",
                      value: true,
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Mountain View Rooms",
                      value: true,
                    },
                  ],
                  hasMenu: [
                    {
                      "@type": "Menu",
                      name: "Govind Prasadam Pure Veg Restaurant",
                      url: "https://anandvardhanresorts.com/dining/",
                    },
                  ],
                  makesOffer: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Room",
                        name: "Deluxe Room",
                        floorSize: {
                          "@type": "QuantitativeValue",
                          value: 270,
                          unitText: "SQ_FT",
                        },
                      },
                      url: "https://anandvardhanresorts.com/rooms-suites/",
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Room",
                        name: "Super Deluxe Room",
                        floorSize: {
                          "@type": "QuantitativeValue",
                          value: 350,
                          unitText: "SQ_FT",
                        },
                      },
                      url: "https://anandvardhanresorts.com/rooms-suites/",
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Suite",
                        name: "Luxury Suite Room",
                        floorSize: {
                          "@type": "QuantitativeValue",
                          value: 500,
                          unitText: "SQ_FT",
                        },
                      },
                      url: "https://anandvardhanresorts.com/rooms-suites/",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/AnandVardhanResortsManali/",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://anandvardhanresorts.com/#website",
                  name: "Anand Vardhan Resorts",
                  url: "https://anandvardhanresorts.com/",
                  publisher: {
                    "@id": "https://anandvardhanresorts.com/#resort",
                  },
                  inLanguage: "en",
                  hasPart: [
                    { "@id": "https://anandvardhanresorts.com/#webpage-home" },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/about-us/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/rooms-suites/#webpage",
                    },
                    {
                      "@id": "https://anandvardhanresorts.com/dining/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/destination-wedding/#webpage",
                    },
                    {
                      "@id": "https://anandvardhanresorts.com/gallery/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/things-to-do/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/spiritual-retreat/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/sightseeing/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/contact-us/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/check-in-policy/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/privacy-policy/#webpage",
                    },
                    {
                      "@id":
                        "https://anandvardhanresorts.com/terms-conditions/#webpage",
                    },
                  ],
                },
                {
                  "@type": "WebPage",
                  "@id": "https://anandvardhanresorts.com/#webpage-home",
                  url: "https://anandvardhanresorts.com/",
                  name: "Manali Retreat Resort | Wellness Resort in Manali - Anand Vardhan Resorts",
                  isPartOf: {
                    "@id": "https://anandvardhanresorts.com/#website",
                  },
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: "https://anandvardhanresorts.com/",
                  },
                },
                // ... Remaining WebPage nodes here (same as your original schema)
              ],
            }),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y5YZX33V7B"
          // strategy="afterInteractive"
          strategy="lazyOnload"
        />

        <Script
          id="google-analytics"
          // strategy="afterInteractive"
          strategy="lazyOnload"
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
        <Script id="gtm-init" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T8NF9RC');
          `}
        </Script>

        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
          defer
        ></script>

        {/* End Google Tag Manager */}

        {/* ✅ Chatbot config */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.eazbotConfig = {
              ndid: "5f556106-94d6-401d-a226-a777df3a92ea",
              hid: "70592479",
            };
          `}
        </Script>

        {/* ✅ Chatbot script */}
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${montserrat.variable} ${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
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

        {/* <RenderChatBot /> */}
        <WebsiteProvider>
          <Navbar />
          {/* <DiscountPopup {...data} /> */}
          {children}
          <Footer />
          {/* <StickyLogo /> */}
          <Whatsapp whatsAppNumber="9317207373" />
          <Call callNumber="919317207373" />
          <FullscreenImagePopup1 />
        </WebsiteProvider>
      </body>
    </html>
  );
}
