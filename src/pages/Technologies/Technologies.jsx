import { useEffect, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Modal } from 'antd';

import servesTechnology from '../../services/tegnolgy.service.js';
import AddTechnoligy from "./AddTexnolgy.jsx";
import Button from '../../components/Button';
import './Technologies.scss';

function Costumer() {
  const [tegnolg, setTegnolg] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    servesTechnology
      .getTegnolgy()
      .then((res) => {
        setTegnolg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelDelet = (id) => {
    servesTechnology
      .remove(id)
      .then((res) => {
        setTegnolg(tegnolg.filter((p) => p.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(tegnolg)
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
                            <MdDelete onClick={showModal}/>
                          </button>
                        </div>
                      </td>


                    <Modal
                      footer={null}
                      title='Haqiqatdan ham o’chirmoqchimisiz?'
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <div className='d-flex justify-content-end gap-4 mt-4'>
                        <Button title="yo'q" variant='neutral' onClick={handleCancel} />
                        <Button
                          onClick={() => hendelDelet(e.id)}
                          title='ha'
                          variant='danger-delete'
                        />
                      </div>
                    </Modal>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <AddTechnoligy/>
        </div>
      </div>
    </>
  );
}

export default Costumer;
