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
  src="https://cdn.authxero.com/sdk/v1/authxero.js"
  data-client-id="authxero.com"
  data-domain="authxero.com"
  async
></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 