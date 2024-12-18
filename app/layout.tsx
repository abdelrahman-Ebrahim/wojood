import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {/* Use the client-side layout wrapper */}
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
