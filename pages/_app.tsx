import '/assets/css/animate.css'
import '/assets/css/main.css'
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;