import { Urbanist } from 'next/font/google'

//import ModalProvider from '@/providers/modal-provider'
//import ToastProvider from '@/providers/toast-provider'
//import Navbar from '@/components/navbar'
//import Footer from '@/components/footer'
//SHEIKH MAHMUDUL HASAN SHIUM
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'This app decribes me (SHEIKH MAHMUDUL HASAN SHIUM).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/*<ToastProvider />
        <ModalProvider />
        <Navbar />*/}
        <ThemeProvider attribute='class' defaultTheme='system'>
            {children}
        </ThemeProvider>
        
        {/*<Footer />*/}
      </body>
    </html>
  )
}