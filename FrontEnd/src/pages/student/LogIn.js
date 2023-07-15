import React from "react";
import styled from "styled-components";
import KITSLogo from "../../assets/images/kits-logo.svg";
import AsAStudent from "../../assets/images/as-a-student.svg";
import { Button } from "components/Button/Button";

const StyledLogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LogIn = () => {
  return (
    <StyledLogIn>
      <img className="logo" src={KITSLogo} alt="" />
      <div className="main">
        <img src={AsAStudent} alt="" />
        <div className="as-a-student">As a Student</div>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Password" />
        <div className="remember-me-forgot-password">
          <div>
            <input type="checkbox" name="" id="" /> Remember me
          </div>
          <div>
            <a href="">Forgot Password</a>
          </div>
        </div>
        <Button></Button>
        <div className="or-sign-in">Or Sign In</div>
        <div className="login-with-other-method">
          <Button></Button>
          <Button></Button>
        </div>
      </div>
    </StyledLogIn>
  );
};

export default LogIn;
