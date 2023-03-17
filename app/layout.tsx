import './globals.css'

export const metadata = {
  title: 'Eurovision Airtable',
  description: 'Connects React frontend to an Airtable data for local Eurovision party',
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
