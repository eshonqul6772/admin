import React from 'react';
import { useEffect, useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import ProductService from '../../services/product.service';
import Checkbox from '../../components/Chekbox/index';
import './Product.scss';
import AddLocation from './AddProduct';

function Buyurtma() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    ProductService.getProduct()
      .then((res) => {
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(productData);

  return (
    <>
      <div className='table__box'>
        <div className='table-responsive '>
          <table className='table'>
            <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
              <tr className='p-4 table__head'>
                <th>Mahsulot nomlari</th>
                <th>Toifalar</th>
                <th>Narxi</th>
                <th>yuklama</th>
                <th>Razmeri</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {productData.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.category}</td>
                    <td>{e.cost}</td>
                    <td>{e.weight}</td>
                    <td>{e.size}</td>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      {' '}
                      <td>
                        <div className='d-flex align-items-center justify-content-end gap-3'>
                          <button className='edit__btn'>
                            <MdModeEdit />
                          </button>
                          <button className='delet__btn'>
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <AddLocation />
        </div>
      </div>
    </>
  );
}

export default Buyurtma;
