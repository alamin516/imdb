import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDb clone",
  description: "This is a movie website imdb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
          <Header></Header>

        {children}
      </body>
    </html>
  );
}
