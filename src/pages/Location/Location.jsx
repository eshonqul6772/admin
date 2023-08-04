import React, { useEffect, useState } from 'react';
import {Modal} from "antd";
import { MdDelete, MdModeEdit } from 'react-icons/md';


import AddresService from '../../services/address.service.js';
import AddLocation from "./AddLocation.jsx";
import './Location.scss';
import Button from "../../components/Button/index.js";


function Address() {

  const [address, setAddress] = useState([]);

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
    AddresService.getAdress()
      .then((res) => {
        setAddress(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hendelDelet = (id) => {
    AddresService
        .deleteAddress(id)
        .then((res) => {
          setAddress(address.filter((p) => p.id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    handleCancel();
  };

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
                          <MdDelete  onClick={showModal} />
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
                        <Button title="yo'q" variant='neutral' onClick={handleCancel}/>
                        <Button
                            onClick={() => hendelDelet(e.id)}
                            title='ha'
                            variant='danger-delete'
                        />
                      </div>
                    </Modal>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <AddLocation/>
        </div>
      </div>
    </>
  );
}

export default Address;
