import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import Header from '@/app/Components/Header'
import { ThemeProvider } from "./theme";
const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Where in the world!',
  description: 'Where in the world!',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${nunito.className} bg-VeryLightGray text-VeryDarkBlue dark:bg-VeryDarkBlue dark:text-White`}>
        <Header />
        {children}
      </body>

    </html>
  )
}
