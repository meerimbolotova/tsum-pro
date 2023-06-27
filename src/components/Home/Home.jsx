import React from 'react';
import './Home.css';
import Card from './Card';

const Home = () => {
  return (
    <div className='home'>
      <header className='main-header'>
        <div className='layers'>
          <div className='layer layers__base'></div>
          <div className='layer layers__midle'></div>
          <div className='layer layers__front'></div>
        </div>
      </header>
      <Card />
    </div>
  );
};

export default Home;