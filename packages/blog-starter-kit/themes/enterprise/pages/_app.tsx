import { AppProps } from 'next/app';
import '../styles/index.css';
import '../styles/scroller.css';
import { LanguageProvider } from '../components/contexts/LanguageContext';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LanguageProvider>
			<Component {...pageProps} />;
		</LanguageProvider>
	)
}
