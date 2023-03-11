import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './comp.css';
import { Link } from "react-router-dom";
import img1 from './aathor.webp';
import img2 from './Aadhaar_logo.webp';

export default function Firstpage(){
    return(
        <>
        <div>
            <div className="container-fluid">
                <div className="bg row mt-2 p-2">
                    <div className="col-lg-4" ><img src={img2} height="150px"/> </div>
                    <div className="col-lg-4"><h1 className="text-center mt-3">Author Card Details Management</h1></div>
                    <div className="col-lg-4 mt-4 text-center">
                        <Link to = "/add"><button type="button" name="button1" id="button1" value="add" className =" btn btn-primary">Add Details</button> </Link>
                        <Link to = "/view"><button type="button" name="button1" id="button1" value="add" className=" btn btn-primary">View Details</button></Link>
                    </div>
                </div>
                <div className="row bg" >
                    <div className="col-lg-4"></div>
                   
                    <div className="col-lg-4"></div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <img src={img1} className="first"/>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    );
}