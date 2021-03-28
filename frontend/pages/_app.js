import Nprogress from 'nprogress';
import Page from '../components/Page';
import Router from 'next/router';

// TODO: swap with my own
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => {
  Nprogress.start();
});

Router.events.on('routeChangeComplete', () => {
  Nprogress.done();
});

Router.events.on('routeChangeError', () => {
  Nprogress.done();
});

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component  {...pageProps} />
  </Page>
);

export default MyApp;
