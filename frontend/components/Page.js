import Header from './Header';
import { any } from 'prop-types'; 

const Page = props => (
  <div>
    <Header />
    <h2>I am the page component</h2>
    {props.children}
  </div>
);

export default Page;

Page.propTypes = {
  children: any
};
