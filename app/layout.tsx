import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Wildan Kamil's Portfolio",
  description:
    "Portfolio of Muhammad Wildan Kamil, a Full Stack Developer specializing in Web3 technologies.",
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
