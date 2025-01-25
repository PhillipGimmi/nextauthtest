// src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://cdn.dashauth.com/sdk/v1/dashauth.js" 
          strategy="beforeInteractive"
        />
        <Script
          id="dash-auth-init"
          strategy="afterInteractive"
        >
          {`
            DashAuth.init({
              clientId: 'a5fd4c90e50562b20972cd3f5f9762559888c51e842f49e250c12046e11761f4',
              domain: 'authxero.com'
            });
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 