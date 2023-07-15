import React from "react";
import styled from "styled-components";
import KITSLogo from "../../assets/images/kits-logo.svg";
import AsAStudent from "../../assets/images/as-a-student.svg";
import { Button } from "components/Button/Button";

const StyledResetPassword = styled.div``;

const ResetPassword = () => {
  return (
    <StyledResetPassword>
      <img src={KITSLogo} alt="" />
      <div className="main">
        <img src={AsAStudent} alt="" />
        <div className="as-a-student">Reset Password</div>
        <input type="text" placeholder="Enter new password" />
        <input type="text" placeholder="Confirm password" />
        <Button></Button>
      </div>
    </StyledResetPassword>
  );
};

export default ResetPassword;
