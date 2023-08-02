import React, {useState, useEffect} from 'react';
import {Button, Modal, Input} from 'antd';


const {TextArea,} = Input;

import AddProduct from "../../services/product.service.js"
import Checkbox from '../../components/Chekbox/index.jsx';
import Img from '../../assets/imgs/Image 5.png';



const AddLocation = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [category, setCategory] = useState([])


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
        body: '',
    });

    const hendelSubmit = (evt) => {

        evt.preventDefault()
        const data = {
            images: product.product_images,
            category: product.category,
            name: product.name,
            cost: product.cost,
            weight: product.weight,
            size: product.size,
            warranty: product.warranty,
            capacity: product.capacity,
            newCost: product.new_cost,
            body: product.body,
            discount: false,
            isActive: true,
            new: true,
        };

        AddProduct.create(id,data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setProduct('')

    };

    useEffect(()=>{
        AddProduct.getProduct().then((response)=>{
            setCategory(response.data)
        })
    },[])


    const cate = category.categories;

    console.log(cate)



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
                                <Input onChange={(event) => setProduct({...product,  product_images: event.target.value})}
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
                                        {
                                            cate.map((e)=>{
                                                return(
                                                    <>
                                                        <option value={e.category}>{e.category}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Tovar nomi
                                    </label>
                                    <Input onChange={(event) => setProduct({...product, name: event.target.value})}
                                           placeholder='masalan: Lux Soft Memory'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Narxi
                                    </label>
                                    <Input onChange={(event) => setProduct({...product, cost: event.target.value})}
                                           placeholder='masalan: 20 000'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Yuklama
                                    </label>
                                    <Input  onChange={(event) => setProduct({...product, weight: event.target.value})} placeholder='masalan: 200 kg'/>
                                </div>
                            </div>

                            <div>
                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Razmeri
                                    </label>
                                    <Input  onChange={(event) => setProduct({...product, size: event.target.value})} placeholder='masalan: 200 x 140 x 40'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Kafolat
                                    </label>
                                    <Input  onChange={(event) => setProduct({...product, warranty: event.target.value})} placeholder='masalan: 1 yil'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Sig’m
                                    </label>
                                    <Input  onChange={(event) => setProduct({...product, capacity: event.target.value})} placeholder='masalan: 2'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Aksiya Narxi
                                    </label>
                                    <Input  onChange={(event) => setProduct({...product, new_cost: event.target.value})} placeholder='masalan: 1 200 000'/>
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
                                        <span>Active</span> <Checkbox/>
                                    </div>

                                    <div className='d-flex mb-4 justify-content-between'>
                                        <span>Navin la</span> <Checkbox/>
                                    </div>

                                    <button type='submit' className='addBtn'>
                                        Qoshish
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
