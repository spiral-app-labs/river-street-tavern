import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "River Street Tavern | East Dundee's Original Gastropub",
    template: "%s | River Street Tavern",
  },
  description:
    "Elevated American pub grub, craft cocktails & good times at East Dundee's first gastropub. Burgers, wings, craft beer & taco nights with weekly karaoke & trivia. Since 2017.",
  keywords: [
    "River Street Tavern",
    "East Dundee restaurant",
    "gastropub",
    "craft cocktails",
    "burgers",
    "wings",
    "karaoke",
    "trivia night",
    "East Dundee IL",
  ],
  openGraph: {
    title: "River Street Tavern | East Dundee's Original Gastropub",
    description:
      "Elevated American pub grub, craft cocktails & good times since 2017.",
    url: "https://www.rstavern.com",
    siteName: "River Street Tavern",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "River Street Tavern",
    description: "East Dundee's Original Gastropub — Since 2017",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "River Street Tavern",
  image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",
  url: "https://www.rstavern.com",
  telephone: "+1-847-844-2384",
  address: {
    "@type": "PostalAddress",
    streetAddress: "102 N River St",
    addressLocality: "East Dundee",
    addressRegion: "IL",
    postalCode: "60118",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.0989,
    longitude: -88.2751,
  },
  servesCuisine: ["American", "Gastropub"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "1000",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "01:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "16:00", closes: "01:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "16:00", closes: "01:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "16:00", closes: "01:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "02:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "02:00" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-charcoal text-cream font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
