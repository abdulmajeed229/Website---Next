import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({

  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",

});
const geistMono = localFont({
  
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {

  title: "Donate Blood",
  description: "Donate Your Blood and Save thousand of lives and help us every year thousand of people die about blood",

};

export const ContactMeta : Metadata = {

  title : "Contact for Blood",
  description : "You can contact us for blood need or donate our contact form or numbers are available on website"

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
