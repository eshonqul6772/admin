import React, {useEffect, useState} from 'react';
import {Modal, Table} from 'antd';
import {MdDelete, MdModeEdit} from 'react-icons/md';
import  {useNavigate} from "react-router-dom";


import categoryService from '../../services/category.service.js';
import AddCategory from '../../components/AddCategory/';
import './Categories.scss';
import Button from '../../components/Button';


function Category() {

    const navigate = useNavigate('')
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            key: 'operation',

        },
    ];
    const [category, setCategory] = useState([]);
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
        categoryService
            .getCategory()
            .then((res) => {
                setCategory(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const hendelDelet = (id) => {
        categoryService
            .deleteCategory(id)
            .then((res) => {
                setCategory(category.filter((p) => p.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
        handleCancel();
    };

    const Operation = ({id}) => {
        return (
            <>
                <div className='d-flex align-items-center justify-content-end gap-3'>
                    <button  className='edit__btn'>
                        <MdModeEdit />
                    </button>
                    <button onClick={showModal} className='delet__btn'>
                        <MdDelete/>
                    </button>
                </div>

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
                            onClick={() => hendelDelet(id)}
                            title='ha'
                            variant='danger-delete'
                        />
                    </div>
                </Modal>
            </>
        )
    }
    
    const dataSource =
        category.map((element) => {
            return (
                {
                    key: element.id,
                    name: element.category,
                    operation: <Operation id={element.id}/>,
                }
            )
        });

    return (
        <>
            <div className='table__box'>
                <Table pagination={{className:'pagination', defaultPageSize:5}} dataSource={dataSource} columns={columns}/>
                <div>
                    <AddCategory/>
                </div>
            </div>
        </>
    );
}

export default Category;
