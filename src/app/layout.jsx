import './globals.css'

export const metadata = {
  title: 'IMDb clone',
  description: 'This is a movie website imdb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
