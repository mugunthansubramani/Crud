import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function Admin_dash(){

    const [ad_dash, setad_dash] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/admin_role')
            .then(response => response.json())
            .then(json => setad_dash(json))
    }, [])

    const dlt = (id) => {
        var key = { id: id };
        var value = { Headers: { "enctype": "multipart/form-data" } };
        axios.post('http://localhost:3002/delete_adminrole', key, value)
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
    return(
        <>
        <div className="bgview">
                <div className="container-fluid ">
                    <div className='row bg p-4 '>
                        <div className='col-lg-4'></div>
                        <div className=' col-lg-5'>
                            <h1 className="ml-3 mt-2">Welcome to Staff Dashboard</h1>
                            <h1 className=' ml-3 mt-2 text-center'>Student Details</h1>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 p-4">
                            <Link to="/"><button type="submit" name="goback" id="goback" className="btn btn-danger">Go Back</button></Link>
                        </div>

                    </div>
                    <div className="row mt-4 textvi">
                        <div className="col-lg-12 text-center ">
                            <div className="table-responsive ">
                                <table className="table table-bordered table-hover  ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>

                                            <th>Mobile Number</th>
                                            <th>Email</th>

                                            <th>PIN</th>
                                            <th>ROLE</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            ad_dash.map((value, index) => (

                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>

                                                    <td>{value.mobile}</td>
                                                    <td>{value.email}</td>

                                                    <td>{value.pin}</td>
                                                    <td>{value.role}</td>


                                                    <td>
                                                        <Link to={"/update/" + value.id}><button type="submit" name="update" id="update" className="btn btn-success">Update</button> </Link>
                                                        <button type="button" name="delete" id="delete" className="btn btn-danger" onClick={() => { dlt(value.id) }}>Delete</button>

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
};