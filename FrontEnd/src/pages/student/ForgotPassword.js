import React from "react";
import styled from "styled-components";
import KITSLogo from "../../assets/images/kits-logo.svg";
import AsAStudent from "../../assets/images/as-a-student.svg";
import { Button } from "components/Button/Button";

const StyledForgotPassword = styled.div``;

const ForgotPassword = () => {
  return (
    <StyledForgotPassword>
      <img src={KITSLogo} alt="" />
      <div className="main">
        <img src={AsAStudent} alt="" />
        <div className="as-a-student">Forgot Password</div>
        <input type="text" placeholder="Enter Recovery Email" />
        <div className="notice">
          A recovery link would be sent to your email, use it to reset your
          password.
        </div>
        <Button></Button>
      </div>
    </StyledForgotPassword>
  );
};

export default ForgotPassword;
