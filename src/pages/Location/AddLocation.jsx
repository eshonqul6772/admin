import React, {useState, useEffect} from 'react';
import {Button, Modal, Input} from 'antd';


const {TextArea,} = Input;

import AddProduct from "../../services/product.service.js"
import Checkbox from '../../components/Chekbox/index.jsx';
import Img from '../../assets/imgs/Image 5.png';



const AddLocation = () => {

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [product, setProducts] = useState([])


    const [addProduct, setProduct] = useState({
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
            images: addProduct.product_images,
            category: addProduct.category,
            name: addProduct.name,
            cost: addProduct.cost,
            weight: addProduct.weight,
            size: addProduct.size,
            warranty: addProduct.warranty,
            capacity: addProduct.capacity,
            newCost: addProduct.new_cost,
            body: addProduct.body,
            discount: false,
            isActive: true,
            new: true,
        };

        AddProduct.create(data)
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
            setProducts(response.data.categories)
        })
    },[])


    return (
        <>
            <Button type='primary' onClick={showModal}>
                Qoshish
            </Button>
            <Modal
                footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                width={720}
            >
                <form onSubmit={hendelSubmit} className='form-location'>
                    <div>
                        <h3>Qo’shish</h3>

                        <div className='form-location__list'>
                            <div>
                                <Input onChange={(e) => setProduct({...addProduct,  product_images: e.target.value})}
                                       style={{display: 'none'}} id='file' type='file'/>
                                <label htmlFor='file'>
                                    <img className='file__img' src={Img} alt=''/>
                                </label>
                            </div>
                            <div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Manzil
                                    </label>
                                    <Input onChange={(event) => setProduct({...addProduct, name: event.target.value})}
                                           placeholder='masalan: Lux Soft Memory'/>
                                </div>

                                <div className='d-flex flex-column mb-3'>
                                    <label className='form__category-lable' htmlFor=''>
                                        Location
                                    </label>
                                    <Input onChange={(event) => setProduct({...addProduct, cost: event.target.value})}
                                           placeholder='masalan: 20 000'/>
                                </div>

                                <div className='d-flex   justify-content-between'>
                                    <span>Active</span> <Checkbox/>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <div className='d-flex flex-column mb-4 '>
                                        <label className='form__category-lable' htmlFor=''>
                                            Malumot
                                        </label>
                                        <TextArea rows={3} placeholder="info.. " maxLength={100}/>
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
