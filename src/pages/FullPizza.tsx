import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Skeleton from '../components/PizzaBlock/Skeleton';
// import PizzaBlock from '../components/PizzaBlock';

const FullPizza: FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
    price: number
  }>();

  useEffect(() => {
    axios
      .get('https://62de9b69976ae7460bde168f.mockapi.io/pizzas/' + id)
      .then((res) => {
        setPizza(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!pizza) {
    return <Skeleton />;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza img" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price}$</h4>
      {/* <PizzaBlock {...pizza} /> */}
    </div>
  );
};

export default FullPizza;
