import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Kranti Kumar',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
     <Footer/>
      </body>
    </html>
  )
}
