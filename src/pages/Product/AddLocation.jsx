import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Img from '../../assets/imgs/Image 5.png';
import Checkbox from '../../components/Chekbox/index.jsx';

const AddLocation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type='primary' onClick={() => setOpen(true)}>
        Qo'shish
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1240}
      >
        <form className='form'>
          <div>
            <h3>Qo’shish</h3>

            <div className='form__list'>
              <div>
                <input className='d-none' id='file' type='file' />
                <label htmlFor='file'>
                  <img className='file__img' src={Img} alt='' />
                </label>
              </div>
              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor='categories'>
                    Toifalar
                  </label>
                  <select name='Categories' id='categories'>
                    <option value='ModelC'>Model C</option>
                    <option value='ModelC'>Model C</option>
                    <option value='ModelC'>Model C</option>
                  </select>
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Tovar nomi
                  </label>
                  <input type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

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

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Sig’m
                  </label>
                  <input type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Aksiya Narxi
                  </label>
                  <input type='text' placeholder='masalan: Lux Soft Memory' />
                </div>
              </div>
              <div>
                <div>
                  <div className='d-flex flex-column'>
                    <label className='form__category-lable' htmlFor=''>
                      Aksiya Narxi
                    </label>
                    <textarea placeholder='info...' name='' id='' cols='30' rows='7'></textarea>
                  </div>

                  <div className='d-flex my-4 justify-content-between'>
                    <span>Navinla</span> <Checkbox />
                  </div>

                  <div className='d-flex mb-4 justify-content-between'>
                    <span>Navinla</span> <Checkbox />
                  </div>

                  <button type='button' className='addBtn'>
                    Qo’shish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default AddLocation;
