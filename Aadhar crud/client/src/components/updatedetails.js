// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './comp.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


export default function Updatedetails(){
    
    const { sno } = useParams();

    const [firstname, setFirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    const [aadhaar, setaadhaar] = useState('');
    const [address, setaddress] = useState('');

    useEffect(() => {
        fetch("http://localhost:3012/update/" + sno + "")
            .then(Response => Response.json())
            .then(function (res) {
                setFirstname(res[0].firstname);
                setlastname(res[0].lastname);
                setmobile(res[0].mobile);
                setemail(res[0].email);
                setgender(res[0].gender);
                setdob(res[0].dob);
                setaadhaar(res[0].aadhaar);
                setaddress(res[0].address);
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }, [])

    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctype": "multipart/form-data" } };



        await axios.put("http://localhost:3012/updatedata/" + sno + '', key, value)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert("error");
                    window.location.href = "/";
                }
                else if (res.data.status === 'success') {
                    alert('Data successfully update');
                    window.location.href = "/";
                }
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }

    return(
        <>
        
        <div>
                <div className="p-2 container-fluid">
                    <div className="row bgupdate p-2">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-5">
                            <h1 className="ml-3 mt-2">Update Author card Details</h1>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 p-4">
                            <Link to="/"><button type="submit" name="goback" id="goback" className="btn btn-danger">Go Back</button></Link>
                        </div>
                    </div>
                    <div className="background-update" /> </div>
                <form onSubmit={handlesubmit} >
                    <div className="container updatetext">
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">First Name :</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='firstname' name='firstname' className='form-control text-center' value={firstname} onChange={(a) => setFirstname(a.target.value)} />
                            </div>


                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Last Name :</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='lastname' name='lastname' className='form-control text-center' value={lastname} onChange={(a) => setlastname(a.target.value)} />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Mobile Number:</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='mobile' name='mobile' className='form-control text-center' value={mobile} onChange={(a) => setmobile(a.target.value)} />
                            </div>

                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Email Id :</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='email' name='email' className='form-control text-center' value={email} onChange={(a) => setemail(a.target.value)} />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Gender :</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='gender' name='gender' className='form-control text-center' value={gender} onChange={(a) => setgender(a.target.value)} />
                            </div>

                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Date-of-Birth :</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='dob' name='dob' className='form-control text-center' value={dob} onChange={(a) => setdob(a.target.value)} />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Aadhaar Number:</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='aadhaar' name='aadhaar' className='form-control text-center' value={aadhaar} onChange={(a) => setaadhaar(a.target.value)} />
                            </div>

                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Address :</h5>
                            </div>
                            <div className="col-lg-3">
                            <input type="text" id='address' name='address' className='form-control text-center' value={address} onChange={(a) => setaddress(a.target.value)} />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12"></div>

                            <div className="col-lg-5"></div>
                            <div className="col-lg-2">
                                <button type="submit" name="submit" id="submit" className="text-center btn btn-danger col-lg-12">Submit</button>
                            </div>
                            <div className="col-lg-5"></div>
                        </div>


                    </div>
                </form>
            </div>
 

        </>
    );
}