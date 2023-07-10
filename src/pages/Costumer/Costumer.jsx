import React from 'react';
import { useEffect } from 'react';
import {MdDelete} from "react-icons/md"

import API from '../../api';
import  Checkbox  from '../../components/Chekbox/index';
import './Costumer.scss';

const arr = [1, 2, 3, 4, 5, 6, 7];

function Costumer() {
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
                <th>sana</th>
                <th>telefon raqami</th>
                <th>Qayta aloqa</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {arr.map((e, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{e}</td>
                      <td>12:11 08/01/2003</td>
                      <td>+998 971674748</td>
                      <td>
                        <Checkbox/>
                      </td>

                      <td>
                        <button className='delet__btn'><MdDelete/></button>
                      </td>
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

export default Costumer;
