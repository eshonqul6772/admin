import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import AddTexnolgyService from '../../services/category.service.js';
import './AddCAtegory.scss';
import Checkbox from '../Chekbox/Checkbox';

const AddCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [inputData, setInputData] = useState({
    category: '',
  });

  const [technology, setTexnology] = useState({
    category: '',
    is_active: '',
  });

  const hendelSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      category: technology.category,
      is_active: technology.is_active,
    };

    AddTexnolgyService.create(data)
      .then((res) => {
        alert('add category');
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  };

  return (
    <>
      <Button type={'primary'} onClick={showModal}>
        Qoshish
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form onSubmit={hendelSubmit} className='form__category'>
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
          <button className='addBtn'>Qoshish</button>
        </form>
      </Modal>
    </>
  );
};

export default AddCategory;