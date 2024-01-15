import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('xuserToken'));
    
    const navigate = new useNavigate();
  const [formdata, setFormdata] = useState({
    email: " ",
    password: " "
  });
  
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userLogin(formdata);
    if ((res.status) == "200" && (res.data.role)== "CUSTOMER")  {
        console.log(res.data);
        

        localStorage.setItem('Token', res.data.token);
        localStorage.setItem('Role', res.data.role);


        const getuid = (res.data.uid);
        console.log(getuid)
        localStorage.setItem('xuserEmail', res.data.email);
        localStorage.setItem('xuserName',res.data.name);
        localStorage.setItem('xuserPassword', res.data.password);
     toast.success(` Welcome ${res.data.name} !`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            navigate('/userdash');
        }, 1000);

    }
    else if((res.status) == "200" && (res.data.role)== "ADMIN" && (res.data.email)=="admin@gmail.com" ){
        console.log(res.data);

        localStorage.setItem('Token', res.data.token);
        localStorage.setItem('Role', res.data.role);
        localStorage.setItem('AdminEmail', res.data.email);
    

        toast.success(` Welcome ${res.data.name} !`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            navigate('/dash');
        }, 1000);
    }
    
    else {
        toast.error(` Invalid Email | Password !`, {
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
        <>
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            <div className="modal" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                        <button className="btn btn-primary w-40 mb-4 mr-4" onClick={handlegoogle}> 
                                            <span className="fa fa-google me-2"></span> Sign in With Google
                                        </button>
                                        <button className="btn btn-primary w-40 mb-4 ml-4"  onClick={handlefb}> 
                                             <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                                        </button>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" onChange={handleChange} name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" onChange={handleChange} name="password" className="form-control" id="password"/>
                                    </div>
                                          
                                        <button type="submit" className="btn btn-outline-primary w-20 mt-5 " data-bs-dismiss="modal" aria-label="Close" >Submit</button>
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
        </>
                    )
}

export default Login