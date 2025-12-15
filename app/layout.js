import "./globals.css";

export const metadata = {
  title: "Sammunat Landing Page",
  description: "Web Development Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

