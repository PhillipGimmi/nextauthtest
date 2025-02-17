// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://dashauth.com/secure.js" defer id="2c436c5b-fa7a-4914-8c5a-0d7e52b27fac"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 