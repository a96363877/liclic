import type React from "react"
import "@/app/globals.css"
import { Cairo } from "next/font/google"

const cairo = Cairo({ subsets: ["arabic"] })

export const metadata = {
  title: "الشركة المتميزة - حلول أعمال احترافية",
  description: "حلول أعمال احترافية لمساعدة شركتك على النمو والنجاح",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
          {children}
      </body>
    </html>
  )
}
