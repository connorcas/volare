import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0a1628',
}

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-ivory">
    <body className="antialiased">
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </body>
  </html>
}
