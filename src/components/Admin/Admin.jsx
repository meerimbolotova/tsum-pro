import React, { useEffect, useState } from 'react';
import './Admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCinema, getGenres } from '../../stores/crud/crudAction';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [descr, setDescr] = useState('');
  const [duration, setDuration] = useState('');
  const [director, setDirector] = useState('');
  const [cast, setCast] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [genre, setGenre] = useState([{ title: 'action' }]);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genres } = useSelector(state => state.cinema);

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
    dispatch(addCinema({ formData, navigate }));
  }

  return (
    <div className='admin__container'>
      <div className='admin__box'>
        <h2 className='admin__title'>ADD CINEMA</h2>
        <input
          placeholder='Title'
          className='inps admin__inp'
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder='Price'
          className='inps admin__inp'
          onChange={e => setPrice(e.target.value)}
        />
        <input
          placeholder='Image'
          className='inps admin__inp'
          onChange={e => setImage(e.target.value)}
        />
        <input
          placeholder='Description'
          className='inps admin__inp'
          onChange={e => setDescr(e.target.value)}
        />
        <input
          placeholder='Duration'
          className='inps admin__inp'
          onChange={e => setDuration(e.target.value)}
        />
        <input
          placeholder='Director'
          className='inps admin__inp'
          onChange={e => setDirector(e.target.value)}
        />
        <input
          placeholder='Cast'
          className='inps admin__inp'
          onChange={e => setCast(e.target.value)}
        />
        <input
          placeholder='Date'
          className='inps admin__inp'
          onChange={e => setDate(e.target.value)}
        />
        <input
          placeholder='Link to Youtube'
          className='inps admin__inp'
          onChange={e => setLink(e.target.value)}
        />
        <select name='genres' className='inps' onChange={e => setGenre(e.target.value)}>
          {genres?.map(elem => (
            <option key={elem.id} value={elem.title}>
              {elem.title}
            </option>
          ))}
        </select>
        <button className='admin__btn' onClick={handleInps}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Admin;
