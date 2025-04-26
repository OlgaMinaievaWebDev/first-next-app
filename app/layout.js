import MainHeader from '@/components/main-header';
import './globals.css'


export const metadata = {
  title: 'NextJs Meal App',
  description: 'My first NextJS meal app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <MainHeader/>
        {children}</body>
    </html>
  );
}
