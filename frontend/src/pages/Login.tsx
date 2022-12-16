import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserModel } from '../model/UserModel';
import { MDBTabs, MDBTabsItem,  MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBInput, MDBRow, MDBCol, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css';

export default function LoginPage() {
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
                        <form onSubmit={handleLogin} className="loginRegForm">
                            <MDBInput type='text' id='uName' name="uName" label='Username' />
                            <MDBInput type='password' id='uPwd' name="uPwd" label='Password' />

                            <MDBRow>
                                <MDBCol className='d-flex justify-content-center'>
                                <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                                </MDBCol>
                                <MDBCol>
                                <a href='#!'>Forgot password?</a>
                                </MDBCol>
                            </MDBRow>

                            <MDBBtn type='submit' className='mb-4' block>
                                Sign in
                            </MDBBtn>
                        </form>
                    }</MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}>{
                        <form className="loginRegForm">
                            <MDBInput id='form8Example1' label='Name' />
                            <MDBInput id='form8Example2' label='Username' />
                            <MDBInput type='email' id='form8Example3' label='Email address' />
                            <MDBInput type='password' id='form8Example4' label='Password' />
                            <MDBInput type='password' id='form8Example5' label='Repeat password' />
                
                            <MDBCheckbox
                            wrapperClass='d-flex justify-content-center'
                            id='form8Example6'
                            label='I have read and agree to the terms'
                            />
                
                            <MDBBtn type='submit' block>
                            Sign in
                            </MDBBtn>
                        </form>
                    }</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
}