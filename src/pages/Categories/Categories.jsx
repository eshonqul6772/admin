import React, { useEffect, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import categoryService from '../../services/category.service.js';
import AddCategory from '../../components/AddCategory/';
import './Categories.scss';

function Category() {
  const [category, setCategory] = useState([]);

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
    const deleted = confirm('do you like');

    if (deleted) {
      categoryService
        .deleteCategory(id)
        .then((res) => {
          setCategory(res.data);
        })
        .catch((err) => {
          //TODO
          console.log(err);
        });
    }

    //TODO
    window.reload();
  };

  console.log(category);

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
                        <button className='edit__btn'>
                          <MdModeEdit />
                        </button>

                        <button onClick={(e) => hendelDelet(element.id)} className='delet__btn'>
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
            <AddCategory />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
