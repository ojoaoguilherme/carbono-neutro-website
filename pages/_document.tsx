import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default function Document({ locale }: DocumentProps) {
  return (
    <Html lang={locale}>
      <Head />
      <body className="x x-fonts-league-spartan x-fonts-montserrat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
