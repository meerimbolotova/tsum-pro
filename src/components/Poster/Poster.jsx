import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCinemas, getOneCinema } from '../../stores/crud/crudAction';

const Poster = () => {
  const { allCinema } = useSelector(state => state.cinema);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemas());
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      {allCinema.map(elem => (
        <>
          <div key={elem.title}>
            <img src={elem.image} alt='error' />
            <h3>{elem.title}</h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default Poster;
