import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserModel } from '../model/UserModel';
import { MDBTabs, MDBTabsItem,  MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';

let user: UserModel;

function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    user = new UserModel(document.forms[0].uName.value, document.forms[0].uPwd.value);

    if(user.uName === "admin" && user.uPassword === "admin") {
        user.uuid = "1234567890";
        user.dName = "Admin";

        user.uPassword = "NOT_STORED";
        user.uRole = "NOT_STORED";
        
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user", JSON.stringify(user));
    }
}

function loginForm(){
    return(
        <form className="loginRegForm" onSubmit={handleLogin}>
            <label htmlFor="loginUName">Username</label>
            <input type="text" className="form-control" name="uName" id="loginUName" placeholder="Username" />

            <label htmlFor="loginPwd">Password</label>
            <input type="password" className="form-control" name="uPwd" id="loginPwd" placeholder="Password" />

            <input type="checkbox" className="form-check-input" id="loginRememberMe" />
            <label className="form-check-label" htmlFor="loginRememberMe">Remember Me</label>

            <button type="submit" className="btn btn-primary grid-five">Login</button>
        </form>
    );
}

function registrationForm(){
    return(
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
    );
}

function HomePage() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value: string) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };

    return (
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
                    <MDBTabsPane show={basicActive === 'tab1'}>{loginForm()}</MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}>{registrationForm()}</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
        );
}

export default HomePage;
