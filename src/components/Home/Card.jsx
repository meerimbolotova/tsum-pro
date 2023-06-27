import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../stores/cards/cardAction';

const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  const { cards } = useSelector(state => state.cards);
  return (
    <div className='card__container'>
      {cards.map((elem, index) => (
        <div style={{ width: '30%', height: '60%' }} key={index}>
          <img src={elem.image} alt='error' style={{ height: '60%' }} />
          <h2 style={{ fontWeight: '900', fontSize: '45px' }}>{elem.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
