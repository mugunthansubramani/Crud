import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './comp.css';
import img from './student.jpg';
import { Link } from "react-router-dom";

export default function Adddetails() {



    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { Headers: { "enctype": "multipart/form-data" } };

        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var mobile = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;
        var dob = document.getElementById("dob").value;
        var aadhaar = document.getElementById("aadhaar").value;
        var address = document.getElementById("address").value;

        if (firstname === '' || firstname === null) {
            alert("enter your firstname");
        }
        else if (lastname === '' || lastname === null) {
            alert("enter your lastname");
        }
        else if (mobile === '' || mobile === null) {
            alert("enter your mobile number");
        }
        else if (email === '' || email === null) {
            alert("enter your email id");
        }
        else if (gender === '' || gender === null) {
            alert("enter your gender");
        }
        else if (dob === '' || dob === null) {
            alert("enter your date of birth");
        }
        else if (aadhaar === '' || aadhaar === null) {
            alert("enter your aadhaar number");
        }
        else if (address === '' || address === null) {
            alert("enter your address");
        }
        else {
            await axios.post("http://localhost:3012/add", key, value)
                .then(function (res) {
                    if (res.data.status === "error") {
                        alert("error");
                        window.location.reload();
                    }
                    else if (res.data.status === "success") {
                        alert("Data inserted");
                        window.location.reload();
                    }
                })
                .catch(function (err) {
                    alert(err);
                    window.location.reload();
                })
        }
    }

    return (
        <>
            <div>
                <div className="p-2 container-fluid">
                    <div className="row bg p-2">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-5">
                            <h1 className="ml-3 mt-2">Author card Details</h1>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 p-4">
                            <Link to="/"><button type="submit" name="goback" id="goback" className="btn btn-danger">Go Back</button></Link>
                        </div>
                    </div>
                    <div className="background" /> </div>
                <form onSubmit={handlesubmit} >
                    <div className="container text">
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">First Name :</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" id="firstname" name="firstname" className="form-control text-center" />
                            </div>


                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Last Name :</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" id="lastname" name="lastname" className="form-control text-center" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Mobile Number:</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" id="mobile" name="mobile" className="form-control text-center" />
                            </div>

                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Email Id :</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" id="email" name="email" className="form-control text-center" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Gender :</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" id="gender" name="gender" className="form-control text-center" />
                            </div>

                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Date-of-Birth :</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="date" id="dob" name="dob" className="form-control text-center" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Aadhaar Number:</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" id="aadhaar" name="aadhaar" className="form-control text-center" />
                            </div>

                            <div className="col-lg-1"></div>
                            <div className="col-lg-2">
                                <h5 className="text-center">Address :</h5>
                            </div>
                            <div className="col-lg-3">
                                <input type="text" id="address" name="address" className="form-control text-center" />
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