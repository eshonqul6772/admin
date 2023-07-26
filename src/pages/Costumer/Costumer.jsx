import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

import servisesCostumer from '../../services/contact.service';
import Checkbox from '../../components/Chekbox/index';
import './Costumer.scss';

function Costumer() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    servisesCostumer
      .getContact()
      .then((res) => {
        setContact(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelDelete = (id) => {
    const confirmm = window.confirm('do you like ');

    if (confirmm) {
      servisesCostumer
        .deleteContact()
        .then((res) => {
          setContact(res.data, id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
              {contact.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.time}</td>
                    <td>{e.number}</td>
                    <td>
                      <Checkbox />
                    </td>

                    <td>
                      <button className='delet__btn' onClick={(e)=> hendelDelete(e.id)}>
                        <MdDelete />
                      </button>
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

export default Costumer;
