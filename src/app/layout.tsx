import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "NeoFatbury | Advanced Skin, Hair & Slimming Clinic in Hyderabad",
  description: "Transform your confidence with US-FDA approved treatments and expert dermatological care at NeoFatbury in Kukatpally and Himayatnagar, Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: '80vh', paddingTop: '106px' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
