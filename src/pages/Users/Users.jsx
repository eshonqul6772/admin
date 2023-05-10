import React, {useEffect, useState} from 'react';
import {VscEdit} from "react-icons/vsc"
import {RiDeleteBin6Line} from "react-icons/ri"
import {GoSearch} from "react-icons/go"
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

import {API} from "../../api/Api.jsx"
import './Users.scss';
import AddUser from "../../components/AddUser/index.jsx";


function Users() {

    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([])

    const loadUser = async ()=>{
       return await axios (
        API.getUser().then((res) => setData(res.data))
       )
    }

    useEffect(() => {
        loadUser()
    }, [])

    const resetHendel = ()=>{
        loadUser()
    }

    console.log(searchTerm)


    const hendelDelet = (id) => {
        const confirum = window.confirm("Do you like delete user");

        if (confirum) {
            axios.delete("http://localhost:3000/users/" + id).then((res) => {
                toast.success('Successfully delete user!')
                console.log(res)
            });

        }
    };

    const hendelSearch = async (e) => {
        e.preventDefault()
        return await axios
            .get(`http://localhost:3000/users?q=${searchTerm}`)
            .then((res) => {
                setData(res.data)

            })
    }


    return (
        <section className='intro'>


            <div className="d-flex align-items-center h-100">
                <div className="sendContext">
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                    <AddUser/>

                    <div className='w-25 mb-3 position-relative'>
                        <form className='d-flex justify-content-between'>
                            <input className='form-control ps-5' placeholder='search user' value={searchTerm}
                                   onChange={(e) => setSearchTerm(e.target.value)} type="text"/>
                            <button onClick={hendelSearch} type='submit' className='btn btn-primary'>search</button>
                            <button className='btn btn-warning' onClick={()=> resetHendel()}>Reset</button>
                        </form>
                        <div className='search-icon'>
                            <GoSearch/>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-0">
                                    <div style={{height: "700px"}} className="table-responsive table-scroll">
                                        <table className="table table-dark mb-0">
                                            <thead style={{backgroundColor: "#393939"}}>
                                            <tr className="text-uppercase  py-3 text-success">
                                                <th className='ps-3 py-4' scope="col">Id</th>
                                                <th className='ps-3 py-4' scope="col">name</th>
                                                <th className='ps-3 py-4' scope="col">Email</th>
                                                <th className='ps-3 py-4' scope="col">Region</th>
                                                <th className='ps-3 py-4' scope="col">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                data.map((e, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{e.id}</td>
                                                            <td>{e.name}</td>
                                                            <td>{e.email}</td>
                                                            <td>{e.address}</td>
                                                            <td>
                                                                <div className='d-flex gap-1'>
                                                                    <button data-mdb-toggle="modale"
                                                                            data-mdb-target="#exampleModal"><VscEdit
                                                                        size='20px' color='chocolate'/></button>
                                                                    <button onClick={ev => hendelDelet(e.id)}>
                                                                        <RiDeleteBin6Line size='20px' color='red'/>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Users;
