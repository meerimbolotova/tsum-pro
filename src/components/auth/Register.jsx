import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../auth/authAction';
import './Register.css';

export default function Register() {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [password_confirm, setPassword_Confirm] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      !email.trim() ||
      !username.trim() ||
      !password.trim()
      // !password_confirm.trim()
    ) {
      alert('Заполните поля!');
      return;
    }
    let formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    // formData.append("password_confirm", password_confirm);

    dispatch(register({ formData, navigate }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='Box'></div>
      <h2>Регистрация</h2>
      <input
        style={{ marginTop: '100px' }}
        placeholder='email'
        id='email'
        autoComplete='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder='username'
        type='text'
        id='username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        placeholder='password'
        type='password'
        id='password'
        autoComplete='current-password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>регистрация</button>
      <button onClick={() => navigate('/login')}>войти</button>
      <button onClick={() => navigate('/resetpassword')}>не помню пароль</button>
    </div>
  );
}
