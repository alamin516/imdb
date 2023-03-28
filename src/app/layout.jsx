import Header from "../components/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDb clone",
  description: "This is a movie website imdb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header></Header>

          {children}
        </Providers>
      </body>
    </html>
  );
}
