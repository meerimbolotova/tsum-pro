import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editer, getGenres, getOneCinema } from '../../stores/crud/crudAction';

const EditCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCinema(id));
    dispatch(getGenres());
  }, []);

  const { genres } = useSelector(state => state.cinema);
  const { oneCinema } = useSelector(state => state.cinema);
  console.log(oneCinema);

  useEffect(() => {
    if (oneCinema) {
      setTitle(oneCinema.title);
      setPrice(oneCinema.price);
      setImage(oneCinema.image);
      setDescr(oneCinema.descr);
      setDuration(oneCinema.duration);
      setDirector(oneCinema.director);
      setCast(oneCinema.cast);
      setDate(oneCinema.date);
      setLink(oneCinema.link);
    }
  }, []);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [descr, setDescr] = useState('');
  const [duration, setDuration] = useState('');
  const [director, setDirector] = useState('');
  const [cast, setCast] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [genre, setGenres] = useState('');

  const navigate = useNavigate();

  function handleInps() {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('description', descr);
    formData.append('duration', duration);
    formData.append('director', director);
    formData.append('cast', cast);
    formData.append('release_date', date);
    formData.append('link', link);
    formData.append('title', title);
    formData.append('genres', genre);
    dispatch(editer({ id, formData, navigate }));
  }

  // if (oneCinema) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div>
      <div className='admin__container'>
        <div className='admin__box'>
          <h2 className='admin__title'>EDIT</h2>
          <input
            value={title}
            placeholder='Title'
            className='inps admin__inp'
            onChange={e => setTitle(e.target.value)}
          />
          <input
            value={price}
            placeholder='Price'
            className='inps admin__inp'
            onChange={e => setPrice(e.target.value)}
          />
          <input
            value={image}
            placeholder='Image'
            className='inps admin__inp'
            onChange={e => setImage(e.target.value)}
          />
          <input
            value={descr}
            placeholder='Description'
            className='inps admin__inp'
            onChange={e => setDescr(e.target.value)}
          />
          <input
            value={descr}
            placeholder='Duration'
            className='inps admin__inp'
            onChange={e => setDuration(e.target.value)}
          />
          <input
            value={director}
            placeholder='Director'
            className='inps admin__inp'
            onChange={e => setDirector(e.target.value)}
          />
          <input
            value={cast}
            placeholder='Cast'
            className='inps admin__inp'
            onChange={e => setCast(e.target.value)}
          />
          <input
            value={date}
            placeholder='Date'
            className='inps admin__inp'
            onChange={e => setDate(e.target.value)}
          />
          <input
            value={link}
            placeholder='Link to Youtube'
            className='inps admin__inp'
            onChange={e => setLink(e.target.value)}
          />
          <select name='genres' className='inps'>
            {genres?.map(elem => (
              <option key={elem.title} value={genre} onChange={e => setGenres(e.target.value)}>
                {elem.title}
              </option>
            ))}
          </select>
          <button className='admin__btn' onClick={handleInps}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
