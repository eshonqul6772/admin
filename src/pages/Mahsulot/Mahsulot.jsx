import React from 'react';
import { useEffect } from 'react';
import {MdModeEdit,MdDelete} from "react-icons/md"

import API from '../../api';
import  Checkbox  from '../../components/Chekbox/index';
import './Mahsulot.scss';

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
              {arr.map((e, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>Lux Soft Memory</td>
                      <td>Mebel J</td>
                      <td>1 200000 som</td>
                      <td>150kg</td>
                      <td>16x678x12</td>
                      <td>
                        <Checkbox/>
                      </td>
                      <td> <td>
                        <div className='d-flex align-items-center justify-content-end gap-3'>
                          <button className='edit__btn'>
                            <MdModeEdit />
                          </button>
                          <button className='delet__btn'>
                            <MdDelete />
                          </button>
                        </div>
                      </td></td>
                    </tr>
                  </>
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
