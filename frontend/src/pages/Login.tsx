import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserModel } from '../model/UserModel';
import { MDBTabs, MDBTabsItem,  MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [basicActive, setBasicActive] = useState('tab1');
    const [userModel] = useState(new UserModel("", ""));

    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        userModel.uName = document.forms[0].uName.value;
        userModel.uPassword = document.forms[0].uPwd.value;
    
        if(userModel.uName === "admin" && userModel.uPassword === "admin") {
            console.log("Login Successful");

            userModel.uuid = "1234567890";
            userModel.dName = "Admin";
    
            userModel.uPassword = "NOT_STORED";
            
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("user", JSON.stringify(userModel));
            localStorage.setItem("noRooms", "5");
    
            navigate('/Home');
        }
    }

    const handleBasicClick = (value: string) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };

    return (
        localStorage.getItem('loggedIn') ? <Navigate to='/Home' /> :

        <div className="homePage">
            <h1>Welcome</h1>
            <h4>Please Login to continue</h4>

            <div className="glass-effect multibox-custom">
                <MDBTabs className='mb-3 custom-nav-link'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Login
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            Registration
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}>{
                        <form className="loginRegForm" onSubmit={handleLogin}>
                            <label htmlFor="loginUName">Username</label>
                            <input type="text" className="form-control" name="uName" id="loginUName" placeholder="Username" />
                
                            <label htmlFor="loginPwd">Password</label>
                            <input type="password" className="form-control" name="uPwd" id="loginPwd" placeholder="Password" />
                
                            <input type="checkbox" className="form-check-input" id="loginRememberMe" />
                            <label className="form-check-label" htmlFor="loginRememberMe">Remember Me</label>
                
                            <button type="submit" className="btn btn-primary grid-five">Login</button>
                        </form>
                    }</MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}>{
                        <form className="loginRegForm">
                            <label htmlFor="regUName">Username</label>
                            <input type="text" className="form-control" id="regUName" placeholder="Username" />
                
                            <label htmlFor="regPwd">Password</label>
                            <input type="password" className="form-control" id="regPwd" placeholder="Password" />
                
                            <label htmlFor="regPwdRe">Password Re</label>
                            <input type="password" className="form-control" id="regPwdRe" placeholder="Password" />
                
                            <label htmlFor="regEmail">Email</label>
                            <input type="email" className="form-control" id="regEmail" placeholder="Email" />
                
                            <label htmlFor="dName">Display Name</label>
                            <input type="text" className="form-control" id="dName" placeholder="Display Name" />
                            
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    }</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
}

export default LoginPage;