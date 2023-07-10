import { useEffect } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import API from '../../api';

import './Toifa.scss';

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
              {arr.map((e, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td style={{ textAlign: 'start' }}>Islombek</td>
                      <td></td>
                      <td></td>
                      <td>{/* <Checkbox/> */}</td>

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
