import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Adminupdate() {

    const { id } = useParams();

    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [pin, setpin] = useState('');
    const [role, setrole] = useState('');

    useEffect(() => {
        fetch("http://localhost:3002/update/" + id + "")
            .then(response => response.json())
            .then(function (res) {
                setname(res[0].name);
                setmobile(res[0].mobile);
                setemail(res[0].email);
                setpin(res[0].pin);
                setrole(res[0].role);
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/signup";
            })
    }, [])

    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctype": "multipart/form-data" } };



        await axios.put("http://localhost:3002/updatedata/" +  + '', key, value)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert("error");
                    window.location.href = "/";
                }
                else if (res.data.status === 'success') {
                    alert('Data successfully update');
                    window.location.href = "/admin_dash";
                }
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
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

                                <input type="text" id="name" name="name" placeholder="Enter your Name" className="form-control text-center" value={name} onChange={(a) => setname(a.target.value)}/>
                                
                            </div>
                            <div className="col-lg-2"></div>
                        </div>

                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">MOBILE :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" id="mobile" name="mobile" placeholder="Enter your Mobile Number" className="form-control text-center" value={mobile} onChange={(a) => setmobile(a.target.value)} />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">EMAIL :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="email" id="email" name="email" placeholder="Enter your Email" className="form-control text-center" value={email} onChange={(a) => setemail(a.target.value)}/>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">PIN :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" id="pin" name="pin" placeholder="Enter your 4-digit pin" className="form-control text-center"  value={pin} onChange={(a) => setpin(a.target.value)}/>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">DESIGNATION :</h5>
                            </div>
                            <div className="col-lg-4">
                                <select name="role" id="role" className="form-control" value={role} onChange={(a) => setrole(a.target.value)}>
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
};
