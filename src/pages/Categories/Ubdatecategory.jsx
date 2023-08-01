import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

import UpdateServices from '../../services/category.service.js';
import Checkbox from '../../components/Chekbox';


const Update = ( ) => {

  const navigate = useNavigate('')
  const { id } = useParams()
  const [subject, setSubject] = useState([])

  const [values, setValues] = useState({
    name: '',
    status: "ACTIVE"
  })



  useEffect(() => {
    UpdateServices.getUserid(id).then((res) => {
      const { name, status } = res.data;
      const findSubject = {
        name,
        status
      }
      setValues(findSubject)
    })
        .catch((err) => console.log(err))


  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    UpdateServices.ubdate().then((e) => {
      console.log()
    }).catch((e) => {
      console.log(e)
    })

    navigate('/subject')
  }


  return (
    <>
      <form onSubmit={handleSubmit} className='form__category'>
          <h2>Qo’shish</h2>
          <label>Kategory Ozgartirish</label>
          <input
            type='text'
            required
            onChange={hendelInput}
            placeholder='masalan: Model B'
          />
          <div style={{ marginBottom: '41px' }} className='d-flex w-100 justify-content-between'>
            <span>Holat</span>
            <Checkbox />
          </div>
          <button className='addBtn'>Ubdate</button>
        </form>
    </>
  );
};

export default Update;
