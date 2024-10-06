import './globals.css';

export const metadata = {
  title: 'My Blog App',
  description: 'A dynamic blog created with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
