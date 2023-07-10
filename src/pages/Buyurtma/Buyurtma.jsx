import React from 'react';
import { useEffect } from 'react';

import API from '../../api';
import  Checkbox  from '../../components/Chekbox/index';
import './Buyurtma.scss';

const arr = [1, 2, 3, 4, 5, 6, 7];

function Buyurtma() {
  useEffect(() => {
    API.getProduct().then((res) => {
      console.log(res);
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
              {arr.map((e, i) => {
                return (
                  
                    <tr key={i}>
                      <td>{e}</td>
                      <td>Eshonqul</td>
                      <td>+998 971674748</td>
                      <td>Ortopedik Eko matras</td>
                      <td>4</td>
                      <td>
                        <Checkbox/>
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
