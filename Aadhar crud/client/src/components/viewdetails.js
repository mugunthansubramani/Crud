import React, { useEffect, useState } from "react";
import 'bootstrap/dist//css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";


export default function Viewdetails() {

    const [studentsdb, setstudentsdb] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3012/studentsdb')
            .then(response => response.json())
            .then(json => setstudentsdb(json))
    }, [])

    const dlt = (sno) => {
        var key = { sno: sno };
        var value = { Headers: { "enctype": "multipart/form-data" } };
        axios.post('http://localhost:3012/delete', key, value)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert("error");
                    window.location.reload();
                }
                else if (res.data.status === 'success') {
                    alert('deleted');
                    window.location.reload();
                }
            })
            .catch(function (error) {
                alert(error);
                window.location.reload();
            })
    }
    return (
        <>
            <div className="bgview">
                <div className="container-fluid ">
                    <div className='row bg p-4 '>
                        <div className='col-lg-4'></div>
                        <div className=' col-lg-5'>
                            <h1 className=' ml-3 mt-2'>Student Details</h1>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 p-4">
                            <Link to="/"><button type="submit" name="goback" id="goback" className="btn btn-danger">Go Back</button></Link>
                        </div>

                    </div>
                    <div className="row mt-4 textvi">
                        <div className="col-lg-12 text-center ">
                            <div className="table-responsive ">
                                <table className="table table-bordered table-hover text-light ">
                                    <thead>
                                        <tr>
                                            <th>sno</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Mobile Number</th>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Date Of Birth</th>
                                            <th>Aadhaar Number</th>
                                            <th>Address</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            studentsdb.map((value, index) => (

                                                <tr>
                                                    <td>{value.sno}</td>
                                                    <td>{value.firstname}</td>
                                                    <td>{value.lastname}</td>
                                                    <td>{value.mobile}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.dob}</td>
                                                    <td>{value.aadhaar}</td>
                                                    <td>{value.address}</td>

                                                    <td>
                                                        <Link to={"/update/" + value.sno}><button type="submit" name="update" id="update" className="btn btn-success">Update</button> </Link>
                                                        <button type="button" name="delete" id="delete" className="btn btn-danger" onClick={() => { dlt(value.sno) }}>Delete</button>

                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}