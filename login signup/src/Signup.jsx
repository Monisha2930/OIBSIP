import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password:'',
        role:'CUSTOMER'
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userRegister(signup);
        if (res.data === "User registered successfully" && res.status==200) {
            toast.success(`Signup Successfull !`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/');
            }, 1500);

        } 
         else if (res.data === "Something went wrong!" && res.status==="400") {
            console.log(res.data);
            toast.error(`Something went wrong!`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
   
    const handlegoogle = () =>
    {
      window.location.href="https://www.google.com";
    };
    
    const handlefb = () =>
    {
      window.location.href="https://www.facebook.com";
    };
   
    return (
        <div>
           
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Signup
            </button>

            
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-40 mr-4 " onClick={handlegoogle}>
                                <span className="fa fa-google me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-40 ml-4" onClick={handlefb}>
                                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label" >Username</label>
                                    <input type="text" className="form-control" id="name" onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                    onChange={handleChange}
                                    />
                                   
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                                    <input type="password" className="form-control" id="password" 
                                    onChange={handleChange}
                                    />
                                </div>
                                    
                                <button type="submit" className="btn btn-outline-primary w-20 mt-5 " >Register</button>
                                <Toaster
                                position="top-center"
                                reverseOrder={true}
                                autoClose={2000}
                                />
      
                             
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup