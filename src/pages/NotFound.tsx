import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { NotFoundBlock } from '../components/';

const NotFound: FC = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page Not Found (404)" />
        <title>Not Found | Pizza Shop</title>
      </Helmet>
      <NotFoundBlock />
    </>
  );
};

export default NotFound;
