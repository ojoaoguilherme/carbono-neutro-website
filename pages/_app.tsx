import { AppProps } from 'next/app';
import '../styles.css';
import { i18n } from '../config/i18n';

export default function Layout({ Component, pageProps, router }: AppProps) {
  const { locale } = router;
  if (i18n.language !== locale) i18n.changeLanguage(locale)

  return <Component {...pageProps} />;
}
