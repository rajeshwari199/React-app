import './signin.css';

// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signin = () => {

    let navigate = useNavigate()
    const Loginbtn = () => {
        navigate("/Login")
    }
    const recruiterbtn = () => {
        navigate("/Signs")
    }

    return (
        <div className="mt-5 mb-5 " >
            <div className="section align">
                <div className="container1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card py-3">
                                <h1 className="creat-head">create an account</h1>
                                <p className="para">its take only couples of minutes to get started!</p>
                                <div className="btn-class d-flex flex-row justify-content-center ml mr">
                                    <button className="col-md-3 button shadow-sm  bg-white rounded " id="loginbutton" onClick={(() => Loginbtn())}>
                                        Login<span><i class="fa-solid fa-circle-check"
                                            id="icon-right"></i></span></button>&nbsp;
                                    <button className="col-md-3 button shadow-sm  bg-white rounded w-40  " id="signup">Signup <span>
                                        <i class="fa-solid fa-circle-check" id="icon-right"></i></span></button>
                                </div>


                                <div className="btn-class  d-flex flex-row justify-content-center ml mr">
                                    <button className="col-md-5 button shadow-sm  bg-white rounded mt-3 w-40" id="button1"
                                        onclick=""> Jobseekers<span><input type="radio" className="abc" name="rbtn" id="icon-right" /></span></button>&nbsp;

                                    <button className="col-md-5 button shadow-sm bg-white rounded mt-3 w-40" id="button2"
                                        onClick={(() => recruiterbtn())}>Recruiters<span><input type="radio" name="rbtn" className="abcd" id="icon-right" /></span></button>
                                </div>


                                <form id="seeker_id">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Full Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter your full company Name" />

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Email Id</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1"
                                            placeholder="Enter your Email Id" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"
                                            placeholder="Minimum 6 characters" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Mobile Number</label>
                                        <div class="d-flex flex-row">
                                            <select name="number" id="number">
                                                <option value="volvo">+91</option>
                                                <option value="saab">+08</option>

                                            </select>&nbsp;

                                            <input type="password" className="form-control" id="" placeholder="Enter your Mobile Number" />

                                        </div>
                                        <h1 className="h1">Gender
                                        </h1>
                                        <div className="d-flex flex-row floar-right">
                                            <input type="radio" value="Male" />&nbsp;
                                            <span className="lb-lable">Male</span><br />
                                            <input type="radio" value="Female" />&nbsp;
                                            <span className="lb-lable">Femal</span><br />
                                            <input type="radio" value="None" />&nbsp;
                                            <span className="lb-lable">preper not to say</span>

                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" checked="checked" class="form-check-input"
                                            id="exampleCheck1" />
                                        <label className="p">I would like to get latest job updates on whatsup</label>
                                        <p className="pa">By clicking Register, you
                                            agree the terms and condition and privacy policey of pabs job.com</p>
                                    </div>
                                    <button type="submit" className="btn-register">Register Now</button>
                                </form>

                            </div>
                        </div>
                        <div className="col-md-6 py-3">
                            <div>
                                <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?size=626&ext=jpg&ga=GA1.2.556192973.1688463070&semt=sph"
                                    alt="" className="img-fluid" id="image_change" />

                            </div>
                            <div className="paragrapgh">
                                <p><i className="fa-solid fa-circle-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Build your profilr
                                    and let Recruiters find you</p>
                                <p><i className="fa-solid fa-circle-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Get job posting
                                    delivered right to your email</p>
                                <p><i className="fa-solid fa-circle-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Find a job and grow
                                    your career</p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>







        </div>
    )
}

export default Signin;