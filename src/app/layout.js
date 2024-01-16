import Header from "@/components/Header/Header";
import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/fonts";

export const metadata = {
  title: "My Movie App",
  description: "Generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
