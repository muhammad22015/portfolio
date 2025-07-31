import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aakash Singh Rajput - Blockchain Developer & Full Stack Engineer",
  description:
    "Portfolio of Aakash Singh Rajput, a Blockchain Developer and Full Stack Engineer specializing in Web3 technologies.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
