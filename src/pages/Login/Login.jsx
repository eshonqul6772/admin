import React, {useState} from 'react';
import {useNavigate, Navigate} from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';


import './Login.scss';
import Containers from '../../components/Container';

import Button from '../../components/Buttons';

const Login = ({setIsAuth}) => {

  const navigate = useNavigate();



  const [goHomePage, setGoHOmePage] = useState(false);
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);



  const loginToken = {
    email:"aeshonqul@gmail.com",
    password:"password"
  }
  localStorage.setItem("token", JSON.stringify(loginToken))

  const getToken =  JSON.parse(localStorage.getItem("token"))

  console.log(getToken)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === getToken.email && password === getToken.password) {
      console.log('Login successful!');

      setIsAuth(true);
      navigate('/');
      toast.success('Here is your toast.');
    } else {
      // setError('Invalid username or password');
      toast.error('invalid email or password');
    }
  };


  if (goHomePage) {
    return <Navigate to='/history' />;
  }


  return (
    <Containers>
      <div className='form-box'>

        <Toaster
          position='top-right'
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
          }}
        />

        <form onSubmit={handleSubmit} style={{marginTop: '50px'}} method='POST' action='localhost:5173/home'>
          <strong className='text-black mb-5 d-block fs-1'>Admin</strong>
          <div className='form__box'>
            <input
              className='form-control border-dark'
              type='text'
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              name='email'

              placeholder='Enter your email'
            />
            <input
              type='password'
              className='form-control border-dark'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name='password'

              placeholder='Enter your password'
            />

            <div className='login__btn'>
              <Button

                variant='success'
                title={'sign'}
                type='submit'
              />
            </div>

            {/*{error && <div style={{ color: 'red' }}>{error}</div>}*/}
          </div>
        </form>
      </div>
    </Containers>
  );
};

export default Login;
