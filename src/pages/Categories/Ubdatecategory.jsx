import React, { useState } from 'react';
import { Modal } from 'antd';
import { MdModeEdit } from 'react-icons/md';

import UpdateServices from '../../services/category.service.js';
import Checkbox from '../../components/Chekbox';

// eslint-disable-next-line react/prop-types
const Update = ({ getValue }) => {
  const data = getValue;

  const [category, setCategory] = useState({
    category: getValue.value,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    console.log(data);
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
    evt.preventDefault();

    const datas = {
      category: category.category,
    };

    UpdateServices.updateCategory(datas)
      .then((res) => {
        alert('update category');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={showModal} className='edit__btn'>
        <MdModeEdit />
      </button>

      <Modal width={400} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form onSubmit={hendelSubmit} className='form__category'>
          <h2>Qo’shish</h2>
          <label>Kategory Ozgartirish</label>
          <input
            defaultValue={category.value}
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
      </Modal>
    </>
  );
};

export default Update;
