// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://www.dashauth.com/secure.js" defer id="f013313b-d38c-4d6c-8677-b0262d27ca65"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 