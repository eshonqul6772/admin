import axios from 'axios';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

// import Authorization from "../../reducers/auth.js"
import './AddCAtegory.scss';
import Checkbox from '../Chekbox/Checkbox';

const AddCategory = ({ isOpen, closeModal }) => {
  const [inputData, setInputData] = useState({
    category: '',
  });

  const hendalSubmit = (evnt) => {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0',
    );
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify(inputData);

    evnt.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: setInputData(raw),
    };

    fetch('http://localhost:1212/admin/categories', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    console.log(raw);
  };

  const hendelDelet = (id) => {
    const confirum = window.confirm('Do you like delet');

    if (confirum) {
      axios.delete('http://localhost:3000/user/' + id).then((res) => {
        alert('delet user');
        naviget('/');
      });
    }
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} contentLabel='Modal'>
      <div className='category__wrapper'>
        <form onSubmit={hendalSubmit} className='form__category'>
          <h2>Qo’shish</h2>
          <label>Kategory Qo’shish</label>
          <input
            type='text'
            required
            onChange={(e) => setInputData({ ...inputData, category: e.target.value })}
            placeholder='masalan: Model B'
          />

          <div style={{ marginBottom: '41px' }} className='d-flex w-100 justify-content-between'>
            <span>Holat</span>
            <Checkbox />
          </div>

          <button type='submit' className='addBtn'>
            Qo’shish
          </button>
          <button className='closeBtn' onClick={closeModal}>
            X
          </button>
        </form>
      </div>
    </ReactModal>
  );
};

export default AddCategory;
