import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
    const handlesubmit = async(event) =>{
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        await axios.post("http://localhost:3002/Signup",datastring,config)
              .then(function(a){
                if(a.data.status === 'error'){
                    alert('SQL Syntax error.contact admin');
                    window.location.href="/";
                }
                else if(a.data.status === 'success'){
                    alert('Account Created');
                    window.location.href="/";
                }
                else{
                    alert('Contact Admin');
                    window.location.href="/";
                }
              })
              .catch(function(error){
                alert(error);
                window.location.reload();
              })

    }

    return (
        <>
            <div className="container-flex">
                <div className="col-lg-12 text-center"><h1>Signup Page</h1></div>
                <form onSubmit={handlesubmit}>
                    <div className="container">
                        <div className="row mt-5">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">Name :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" id="name" name="name" placeholder="Enter your Email Address" className="form-control text-center" />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>

                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">MOBILE :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" id="mobile" name="mobile" placeholder="Enter your Mobile Number" className="form-control text-center" />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">EMAIL :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="email" id="email" name="email" placeholder="Enter your Email" className="form-control text-center" />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">PIN :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" id="pin" name="pin" placeholder="Enter your 4-digit pin" className="form-control text-center" />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">DESIGNATION :</h5>
                            </div>
                            <div className="col-lg-4">
                            <select name="role" id="role" className="form-control">
                                    <option value="">--choose--</option>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="STAFF">STAFF</option>
                                    <option value="STUDENT">STUDENT</option>
                                </select>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-4"></div>
                            <div className="col-lg-2">
                            <Link to="/"> <button type="button" name="submit" id="submit" className="text-center btn btn-success col-lg-12">Sign in</button></Link>
                               
                            </div>
                            {/* <div className="col-lg-2"></div>
                            <div className="col-lg-2"></div> */}
                            <div className="col-lg-2">
                            <button type="submit" name="submit" id="submit" className="text-center btn btn-danger col-lg-12">Submit</button>
                               
                            </div>
                            <div className="col-lg-4"></div>
                        </div>
                    </div>
                </form>
            </div>


        </>
    );
}