import Page from '../components/Page';

const myApp = ({ Component, pageProps }) => (
  <Page>
    <Component  {...pageProps} />
  </Page>
);

export default myApp;
