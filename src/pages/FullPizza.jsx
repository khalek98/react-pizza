import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <img src="" alt="Pizza img" />
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis, eos illo soluta
        perspiciatis est nam saepe velit aut ipsum inventore at culpa quod cupiditate quas, magnam
        ipsa accusamus in.
      </p>
      <h4>20$</h4>
    </div>
  );
};

export default FullPizza;
