import React, { useEffect, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Modal } from 'antd';

import categoryService from '../../services/category.service.js';
import AddCategory from '../../components/AddCategory/';
import './Categories.scss';
import Button from '../../components/Button';
import Ubdatecategory from './Ubdatecategory.jsx';

function Category() {
  const [category, setCategory] = useState([]);
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

  useEffect(() => {
    categoryService
      .getCategory()
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelDelet = (id) => {
    categoryService
      .deleteCategory(id)
      .then((res) => {
        setCategory(category.filter((p) => p.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
    handleCancel();
  };

  return (
    <>
      <div className='table__box'>
        <div className='table-responsive '>
          <table className='table '>
            <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
              <tr className='p-4 table__head'>
                <th style={{ textAlign: 'start' }}>Toifalar</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {category.map((element, i) => {
                return (
                  <tr key={i}>
                    <td style={{ textAlign: 'start' }}>{element.category}</td>
                    <td></td>
                    <td></td>
                    <td>{/* <Checkbox/> */}</td>

                    <td>
                      <div className='d-flex align-items-center justify-content-end gap-3'>
                        <Ubdatecategory getValue={element} />

                        <button onClick={showModal} className='delet__btn'>
                          <MdDelete />
                        </button>
                      </div>
                    </td>

                    <Modal
                      footer={null}
                      title='Haqiqatdan ham o’chirmoqchimisiz?'
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <div className='d-flex justify-content-end gap-4 mt-4'>
                        <Button title="yo'q" variant='neutral' onClick={handleCancel} />
                        <Button
                          onClick={() => hendelDelet(element.id)}
                          title='ha'
                          variant='danger-delete'
                        />
                      </div>
                    </Modal>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <AddCategory />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
