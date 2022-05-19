import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { RootState, store } from '../store';
import 'dayjs/locale/th';
import '../styles/globals.scss';
import '../styles/icon.scss';

dayjs.extend(relativeTime);
dayjs.locale('th');

function ThemeComponent({ Component, pageProps, router }: AppProps) {
  const props: any = { pageProps, router };
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider
      forcedTheme={theme.mode}
      enableSystem={false}
      attribute="class"
    >
      <Component {...props} />
    </ThemeProvider>
  );
}

const MyApp = (props: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeComponent {...props} />
    </Provider>
  );
};

export default MyApp;
