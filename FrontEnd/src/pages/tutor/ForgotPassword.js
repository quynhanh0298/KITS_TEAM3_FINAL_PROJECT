import React from "react";
import styled from "styled-components";
import KITSLogo from "../../assets/images/kits-logo.svg";
import AsATutor from "../../assets/icons/as-tutor.svg";
import { Button } from "components/Button/Button";

const StyledForgotPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #def2f3;
  .logo {
    padding-top: 81px;
    padding-bottom: 54px;
  }
  .main {
    .as-a-student-img {
      padding-top: 81px;
    }
    .as-a-student {
      padding-bottom: 41px;
    }
    padding-left: 151px;
    padding-right: 151px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(42px);
    input.info {
      width: 100%;
      height: 49px;
      flex-shrink: 0;
      border-radius: 15px;
      background: #fff;
      border: 0;
      padding-left: 29px;
      margin-bottom: 44px;
    }
    .note {
      border-radius: 8px;
      background: rgba(253, 255, 134, 0.45);
      padding: 15px 11px 16px 11px;
      margin-bottom: 36px;
    }
    padding-bottom: 63px;
    margin-bottom: 326px;
  }
`;

const ForgotPassword = () => {
  return (
    <StyledForgotPassword>
      <img className="logo" src={KITSLogo} alt="" />
      <div className="main">
        <img className="as-a-student-img" src={AsATutor} alt="" />
        <div className="as-a-student">Forgot Password</div>
        <input
          className="info"
          type="text"
          placeholder="Enter Recovery Email"
        />
        <div className="note">
          A recovery link would be sent to your email, use it to reset your
          password.
        </div>
        <Button
          width={"218px"}
          height={"69px"}
          borderRadius={"31px"}
          bgColor={"#0C4CA3"}
        >
          Send email
        </Button>
      </div>
    </StyledForgotPassword>
  );
};

export default ForgotPassword;
