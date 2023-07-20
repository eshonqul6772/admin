import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Checkbox from '../../components/Chekbox/index.jsx';

const AddLocation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type='primary' onClick={() => setOpen(true)}>
        Qoshish
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={515}
      >
        <form className='form-texnolgy'>
          <div>
            <h3>Qo’shish</h3>

            <div className='form__list'>
              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Narxi
                  </label>
                  <input type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Yuklama
                  </label>
                  <input type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <div className='d-flex my-4 justify-content-between'>
                  <span>Navinla</span> <Checkbox />
                </div>
              </div>

              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Razmeri
                  </label>
                  <input type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Kafolat
                  </label>
                  <input type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <button type='button' className='addBtn'>
                    Qo’shish
                  </button>
               
              </div>
             
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default AddLocation;
