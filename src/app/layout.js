
import Header from "@/Header";
import "./globals.css";
import "./animations.css";
import Footer from "@/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from "@/Menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
