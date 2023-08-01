import React, {useState} from 'react';
import {Button, Modal, Input} from 'antd';


const {TextArea,} = Input;

import AddProduct from "../../services/product.service.js"
import Img from '../../assets/imgs/Image 5.png';
import Checkbox from '../../components/Chekbox/index.jsx';


const AddLocation = () => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [product, setProduct] = useState({
        product_images: "",
        category: '',
        name: '',
        cost: '',
        weight: '',
        size: '',
        warranty: '',
        capacity: '',
        new_cost: '',
        status: '',
    });


    const hendelSubmit = (evt) => {

        const datas = {
            product_image: product.product_images,
            category: product.category,
            name: product.name,
            cost: product.cost,
            weight: product.weight,
            size: product.size,
            warranty: product.warranty,
            capacity: product.capacity,
            new_cost: product.new_cost,
            isActive: true,
        };

        console.log(datas)

        AddProduct.create(datas)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setProduct('')

        handleCancel()

    };


    const [open, setOpen] = useState(false);
    return (
        <>
            <Button type='primary' onClick={() => setOpen(true)}>
                Qoshish
            </Button>
            <Modal
                footer={null}
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1240}
            >
                <form onSubmit={hendelSubmit} className='form'>
                    <div>
                        <h3>Qo’shish</h3>

                        <div className='form__list'>
                            <div>
                                <Input onChange={(evnt) => setProduct({...product,  product_images: evnt.target.value})}
                                       style={{display: 'none'}} id='file' type='file'/>
                                <label htmlFor='file'>
                                    <img className='file__img' src={Img} alt=''/>
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
                                    <Input onChange={(evnt) => setProduct({...product, name: evnt.target.value})}
                                           placeholder='masalan: Lux Soft Memory'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Narxi
                                    </label>
                                    <Input onChange={(evnt) => setProduct({...product, cost: evnt.target.value})}
                                           placeholder='masalan: 20 000'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Yuklama
                                    </label>
                                    <Input  onChange={(evnt) => setProduct({...product, weight: evnt.target.value})} placeholder='masalan: 200 kg'/>
                                </div>
                            </div>

                            <div>
                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Razmeri
                                    </label>
                                    <Input  onChange={(evnt) => setProduct({...product, size: evnt.target.value})} placeholder='masalan: 200 x 140 x 40'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Kafolat
                                    </label>
                                    <Input  onChange={(evnt) => setProduct({...product, warranty: evnt.target.value})} placeholder='masalan: 1 yil'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Sig’m
                                    </label>
                                    <Input  onChange={(evnt) => setProduct({...product, capacity: evnt.target.value})} placeholder='masalan: 2'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Aksiya Narxi
                                    </label>
                                    <Input  onChange={(evnt) => setProduct({...product, new_cost: evnt.target.value})} placeholder='masalan: 1 200 000'/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className='d-flex flex-column'>
                                        <label className='form__category-lable' htmlFor=''>
                                            Malumot
                                        </label>
                                        <TextArea rows={3} placeholder="info.. " maxLength={100}/>
                                    </div>

                                    <div className='d-flex my-4 justify-content-between'>
                                        <span>Navinla</span> <Checkbox/>
                                    </div>

                                    <div className='d-flex mb-4 justify-content-between'>
                                        <span>Navinla</span> <Checkbox/>
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
