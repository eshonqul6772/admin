import React, { useState } from 'react';
import { useEffect } from 'react';

import oredrsServises from '../../services/orders.service';

import Checkbox from '../../components/Chekbox';

import './Buyurtma.scss';

function Buyurtma() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    oredrsServises
      .getOrders()
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className='table__box'>
        <div className='table-responsive '>
          <table className='table'>
            <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
              <tr className='p-4 table__head'>
                <th>ID</th>
                <th>Isim</th>
                <th>telefon raqami</th>
                <th>mahsulot nomlari</th>
                <th>miqdor</th>
                <th>Qayta aloqa</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.number}</td>
                    <td>{e.product_name}</td>
                    <td>{e.count}</td>
                    <td>
                      <Checkbox />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Buyurtma;
