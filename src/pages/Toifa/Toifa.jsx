import React, { useEffect, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import axios from 'axios';
import categoryService from '../../services/category.service.js';
import AddCategory from '../../components/AddCategor/';

import './Toifa.scss';

function Category() {
  const [category, setCAtegory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    categoryService
      .getCategory()
      .then((res) => {
        setCAtegory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelDelet = (id) => {
    const confirum = window.confirm('Do you like delet');

    if (confirum) {
      axios.delete('http://localhost:1212/admin/' + id).then((res) => {
        alert('delet user');
        console.log(res);
      });
    }
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
              {category.map((e, i) => {
                return (
                  <tr key={i}>
                    <td style={{ textAlign: 'start' }}>{e.category}</td>
                    <td></td>
                    <td></td>
                    <td>{/* <Checkbox/> */}</td>

                    <td>
                      <div className='d-flex align-items-center justify-content-end gap-3'>
                        <button className='edit__btn'>
                          <MdModeEdit />
                        </button>
                        <button onClick={(e) => hendelDelet(e.id)} className='delet__btn'>
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <div className='add__btn-box'>
              <button className='addBtn' onClick={openModal}>
                Qo’shish
              </button>
            </div>
            <AddCategory isOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
