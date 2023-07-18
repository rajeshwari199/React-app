
import './login.css';
import { useNavigate } from 'react-router-dom';
const Login=()=>{

let navigate=useNavigate()
const registerbtn=()=>{
    navigate("/Signin")
}


    return(
        <div className="mr mt-5 mb-5">
           


           <div class="section">
                <div class="container1">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card py-3">
                                <h1 class="create-head">Login</h1>
                                <p class="para">its take only couples of minutes to get started!</p>
                                

                                <form>
                                    
                                    <div className="form-group align">
                                        <label for="exampleInputPassword1">Email Id</label>
                                        <input type="email" class="form-control" id="exampleInputPassword1"
                                            placeholder="Enter your Email Id"/>
                                    </div>
                                    <div className="form-group align">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"
                                            placeholder="Enter Your password"/>
                                    </div>
                                    <div class="forgot"><button type="button" class="forgotbtn shadow-sm bg-white rounded w-30" onclick="document.location='password.html'" >forgot password ?</button></div>

                                    <div class="d-grid"><button type="button" class="btn btn-dark log">Login</button></div>

                                    <div class="d-grid"><button type="button" class="btn loginbutton" onclick="document.location='OTP.html'">Login Via OTP</button></div>
                                    <div class="d-grid"><button class=" button shadow-sm  bg-white rounded w-30" id="button1"><span><i class="fa-brands fa-google"></i></span>Log in with Google</button></div>
                                </form>

                            </div>
                        </div>
                        <div className="col-md-6 py-5 align">
                            <div>
                                <img src="https://img.freepik.com/free-photo/sign-user-password-privacy-concept_53876-120316.jpg?size=626&ext=jpg&ga=GA1.2.194814128.1688462061&semt=sph"
                                    alt="" class="img-fluid" id="image_change"/>

                            </div>
                            <div className="paragrapgh align">
                                <p><i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;one click apply using pabjobs profile</p>
                                <p><i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Get relevent job recommandations</p>
                                <p><i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;showcase profile to top companies and consultants</p>
                                <p><i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;know application status on applies jobs</p>
                                <div><button class=" button1 shadow-sm bg-white rounded" id="button1" onClick={(()=>registerbtn())}>Register for free</button></div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>







        </div>
    )
}
export default Login;