import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {GoPlus} from "react-icons/go"


import "./AddUser.scss"
function AddUser() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const naviget = useNavigate();

  const hendalSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/users", inputData).then((res) => {
      console.log(res)

      alert("sucsses add user");
    });
  };
  return (
    <>


      <div className='users-top mb-3'>
        <div className='d-flex align-items-center justify-content-between'>
          <strong className='text-black fs-3 fw-light'>Users</strong>
          <button type="button" className="btn btn-primary add-btn" data-mdb-toggle="modal" data-mdb-target="#exampleModal"><GoPlus/> New user</button>
        </div>
      </div>

      <div className="modal top  fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
           aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title text-black" id="exampleModalLabel">Add user</h5>
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='d-flex flex-column gap-3' onSubmit={hendalSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input id='name' required onChange={(element) => setInputData({...inputData, name: event.target.value})}
                         type="text"
                         placeholder="enter name"
                         className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input id='email' required onChange={(element) => setInputData({...inputData, email: event.target.value})}
                         type="email"
                         placeholder="enter email"
                         className="form-control"
                  />
                </div>

                <div>
                  <label htmlFor="countery">Countery</label>
                  <input id='countery' required onChange={(element) => setInputData({...inputData, address: event.target.value})}
                         type="text"
                         placeholder="enter contury"
                         className="form-control"
                  />
                </div>
                <div className='d-flex justify-content-end gap-2'>
                  <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">add</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
