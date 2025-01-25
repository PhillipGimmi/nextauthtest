// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script 
  src="https://authxero.com"
  data-client-id="a5fd4c90e50562b20972cd3f5f9762559888c51e842f49e250c12046e11761f4"
  defer
></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 