import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'antd';


import SevisecTechlogy from "../../services/tegnolgy.service.js"
import Checkbox from '../../components/Chekbox/index.jsx';

const AddLocation = () => {
  const [data, setData] = useState({
    name:'',
    thumbnail:'',
    link:'',
    description:''
  })

  const [open, setOpen] = useState(false);


  const HendleSubmit = (evt)=>{
    evt.preventDefault()

  const  getData = {
      name: data.name,
      thumbnail:data.thumbnail,
      link:data.link,
      description:data.description,
        isActive:true
    }

      SevisecTechlogy.create(getData).then((res)=>{
        setData(res)
      })
  }


  console.log(data)

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
        width={460}
        footer={null}
      >
        <form onSubmit={HendleSubmit} className='form-texnolgy'>
          <div>
            <h3>Qo’shish</h3>

            <div className='form-texnolgy__list'>
              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Nomi
                  </label>
                  <input onChange={(e)=> setData({...data, name: e.target.value})} type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Yuklama
                  </label>
                  <input onChange={(e)=> setData({...data, thumbnail: e.target.value})} type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <div className='d-flex my-4 justify-content-between'>
                  <span>Navinla</span> <Checkbox />
                </div>
              </div>

              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Rasm
                  </label>
                  <input onChange={(e)=> setData({...data, description: e.target.value})} type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    Video
                  </label>
                  <input onChange={(e)=> setData({...data, link: e.target.value})} type='text' placeholder='masalan: Lux Soft Memory' />
                </div>

                <button type='submit' className='addBtn'>
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
