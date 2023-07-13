import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLock } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('success login');

import { login } from '../../reducers/actions/auth';

import './Login.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    userName: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(values.userName, values.password))
      .then(() => {
        // navigate("/costumer");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='wrapper'>
        <Toaster position='top-right' reverseOrder={false} />

        <form onSubmit={handleSubmit}>
          <h2>Kirish</h2>

          <div>
            <div style={{ marginBottom: '13px' }} className='login_box'>
              <input
                type='text'
                name='userName'
                placeholder='login'
                value={values.userName}
                onChange={handleInputChange}
              />
              <AiOutlineUser className='users_icons' />
            </div>

            <div className='login_box'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={values.password}
                onChange={handleInputChange}
              />
              <CiLock className='users_icons' />
            </div>
          </div>

          <button onClick={notify} type='submit'>
            Kirish
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
