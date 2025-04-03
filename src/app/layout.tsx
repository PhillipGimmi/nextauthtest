// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script src="https://www.dashauth.com/secure.js" id="29d37b3e-92df-4033-a54f-cf65a7a7a4eb" defer></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 