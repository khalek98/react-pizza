import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import styles from './FullPizza.module.scss';
import styleButton from '../../components/NotFoundBlock/NotFoundBlock.module.scss';

import { PizzaBlockProps, SelectorBlock } from '../../components/PizzaBlock';
import { Helmet } from 'react-helmet';

const FullPizza: FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<PizzaBlockProps>();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    axios
      .get('https://62de9b69976ae7460bde168f.mockapi.io/pizzas/' + id)
      .then((res) => {
        setStatus('succes');
        setPizza(res.data);
      })
      .catch((e) => {
        setStatus('error');
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);

  if (!pizza && status === 'loading') {
    return (
      <>
        <Helmet>
          <meta name="description" content="Full pizza information" />
          <title>Loading... | Pizza Shop</title>
        </Helmet>
        <Skeleton />;
      </>
    );
  }

  if (pizza && status === 'succes') {
    return (
      <>
        <Helmet>
          <meta name="description" content="Full pizza information" />
          <title>{pizza.name} | Pizza Shop</title>
        </Helmet>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img className={styles.img} src={pizza.imageUrl} alt="Pizza img" />
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <SelectorBlock {...pizza} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Full pizza information error" />
        <title>Not Found | Pizza Shop</title>
      </Helmet>
      <div className="content__error-info">
        <h2>
          Something wents wrong <span>😕</span>
        </h2>
        <p>Unfortunately, the pizzas couldn't be loaded. Try again later.</p>
        <Link to="/" className={`${styleButton.button} button button--black`}>
          <span>Back</span>
        </Link>
      </div>
    </>
  );
};

export default FullPizza;
