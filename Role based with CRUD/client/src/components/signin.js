import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signin() {

    
    localStorage.clear();

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        await axios.post("http://localhost:3002/Signin",datastring,config)
              .then(function(res){
                if(res.data.status === 'syntax_error'){
                    alert('Contact Admin');
                    window.location.reload();
                }
                else if(res.data.status === 'success'){
                    let id = res.data.id;
                    let role = res.data.role;
                    if(role === 'ADMIN'){
                        alert(role);
                        localStorage.setItem('empid',id);
                        window.location.href="/admin_dash";
                    }
                    else if(role === 'STAFF'){
                        alert(role);
                        localStorage.setItem('empid',id);
                        window.location.href="/staff_dash";
                    }
                    else if(role === 'STUDENT'){
                        alert(role);
                        localStorage.setItem('empid',id);
                        window.location.href="./students_dash";
                    }
                }
                else if(res.data.status === 'Invalid_details'){
                    alert('Invalid user details');
                    window.location.reload();
                }
                else{
                    alert('Contact Admin');
                    window.location.reload();
                }
              })
              .catch(function(error){
                alert(error);
                window.location.reload();
              })

    }

    return (
        <>
            <div className="container-fluid">
                <div className="col-lg-12 text-center"><h1>Signin Page</h1></div>
                <form onSubmit={handlesubmit}>
                    <div className="container mt-4">
                        <div className="row ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">USER Name :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" id="username" name="username" placeholder="Enter your Email Address" className="form-control text-center" />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>

                        <div className="row mt-5 ">

                            <div className="col-lg-2"></div>
                            <div className="col-lg-4">
                                <h5 className="text-center">PASSWORD :</h5>
                            </div>
                            <div className="col-lg-4">
                                <input type="password" id="password" name="password" placeholder="Enter your Password" className="form-control text-center" />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-lg-4"></div>
                            <div className="col-lg-2">
                                <Link to='/signup'><button type="button" name="submit" id="submit" className="text-center btn btn-danger col-lg-12">Sign up</button></Link>
                            </div>
                            {/* <div className="col-lg-2"></div>
                            <div className="col-lg-2"></div> */}
                            <div className="col-lg-2">
                                <button type="submit" name="submit" id="submit" className="text-center btn btn-success col-lg-12">Sign in</button>
                            </div>
                            <div className="col-lg-4"></div>
                        </div>

                    </div>


                </form>
            </div>
        </>
    );
}