import React, { useState } from 'react';
import './Admin.css';

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

  function handleInps() {
    let obj = {
      title,
      price,
      image,
      descr,
      duration,
      director,
      cast,
      date,
      link,
    };
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
        <button className='admin__btn' onClick={handleInps}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Admin;
