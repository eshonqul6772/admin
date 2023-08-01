import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import AddCategoryService from '../../services/category.service.js';
import './AddCAtegory.scss';
import Checkbox from '../Chekbox/Checkbox';

const AddCategory = () => {

  const [category, setCategory] = useState({
    category: '',
  });

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

  const hendelInput = (evnt) => {
    evnt.preventDefault();
    setCategory({ ...category, category: evnt.target.value });
  };

  const hendelSubmit = (evt) => {

    const datas = {
      category: category.category,
      isActive: true,
    };

    AddCategoryService.create(datas)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    handleCancel();

    setCategory('')
  };

  return (
    <>
      <Button type={'primary'} onClick={showModal}>
        Qoshish
      </Button>
      <Modal width={400} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form onSubmit={hendelSubmit} className='form__category'>
          <h2>Qo’shish</h2>
          <label>Kategory Qo’shish</label>
          <input type='text' required onChange={hendelInput} placeholder='masalan: Model B' />
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
