import { useEffect, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import servisTegnolgy from '../../services/tegnolgy.service.js';
import './Technologies.scss';

function Costumer() {
  const [tegnolg, setTgnolg] = useState([]);

  useEffect(() => {
    servisTegnolgy
      .getTegnolgy()
      .then((res) => {
        setTgnolg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelDelet = (id) => {
    const confirm = window.confirm('Do you like delete');

    if (confirm) {
      servisTegnolgy
        .remove(id)
        .then((res) => {
          setTgnolg(res.data);
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
          <table className='table '>
            <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
              <tr className='p-4 table__head'>
                <th style={{ textAlign: 'start' }}>Nomlar</th>
                <th>Matn</th>
                <th>Vidio</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {tegnolg.map((e) => {
                return (
                  <>
                    <tr key={e.id}>
                      <td style={{ textAlign: 'start' }}>{e.name}</td>
                      <td>{e.thumbnail}</td>
                      <td>
                        <a target='_blank' href={`https//${e.link}`} rel='noreferrer'>
                          {e.link}
                        </a>
                      </td>
                      <td></td>

                      <td>
                        <div className='d-flex align-items-center justify-content-end gap-3'>
                          <button className='edit__btn'>
                            <MdModeEdit />
                          </button>
                          <button className='delet__btn' onClick={hendelDelet}>
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
