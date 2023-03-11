import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

export default function Staff_dash() {

    const [staf_dash, setstaf_dash] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/staff_role')
            .then(response => response.json())
            .then(json => setstaf_dash(json))
    }, [])

    return (
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
                                            staf_dash.map((value, index) => (

                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>

                                                    <td>{value.mobile}</td>
                                                    <td>{value.email}</td>

                                                    <td>{value.pin}</td>
                                                    <td>{value.role}</td>


                                                    <td>
                                                        <Link to={"/update/" + value.sno}><button type="submit" name="update" id="update" className="btn btn-success">Update</button> </Link>

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
