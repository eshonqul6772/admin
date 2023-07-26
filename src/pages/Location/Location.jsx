import React, { useEffect, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';


import AddresService from '../../services/address.service.js';
import './Location.scss';


function Address() {

  const [address, setAddress] = useState([]);

  useEffect(() => {
    AddresService.getAdress()
      .then((res) => {
        setAddress(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className='table__box'>
        <div className='table-responsive '>
          <table className='table '>
            <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
              <tr className='p-4 table__head'>
                <th style={{ textAlign: 'start' }}>Manzil</th>
                <th>Matn</th>
                <th>location</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {address.map((e, i) => {
                return (
                  <tr key={i}>
                    <td style={{ textAlign: 'start' }}>{e.geolacation}</td>
                    <td>{e.destination}</td>
                    <td>{e.location}</td>
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Address;
