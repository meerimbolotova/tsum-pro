import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  // const navigate = useNavigate();
  // setTimeout(() => {
  //   navigate("/");
  // }, 10000);

  return (
    <div className='notfoundpage-container'>
      <div class='notfoundpage-form'>
        <div class='notfoundpage-img'>
          <img
            src='https://assets.codepen.io/5647096/backToTheHomepage.png'
            alt='Back to the Homepage'
          />
        </div>
        <div class='notfoundpage-text'>
          <h2 className='notfpage_404'>404</h2>
          <h3 className='notfpage_text'>PAGE NOT FOUND</h3>
          <h3 className='notfpage_text'>BACK TO HOME?</h3>
          <button class='yes'>YES</button>
          <div class='m-initialScene-text'></div>
          <div class='countdown'>
            <small>До перехода на главную осталось</small>
            <span>4</span>
            <small>секунды</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
