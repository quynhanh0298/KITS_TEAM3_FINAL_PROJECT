import React from "react";
import styled from "styled-components";
import KITSLogo from "../assets/images/kits-logo.svg";
import SignUpBanner from "../assets/images/sign-up-banner.svg";
import { Button } from "components/Button/Button";
const StyledSignUp = styled.div`
  display: flex;
  flex-direction: row;
  .sign-up-logo {
    padding-bottom: 76px;
  }

  .left {
    flex: 2;
    .sign-up-banner {
    }
    .sign-up-logo-info {
      padding-top: 115px;
      padding-left: 140px;
      padding-right: 156px;
    }
    .welcome-to-kits {
      font-family: Poppins;
      font-size: 32px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: left;

      padding-bottom: 9px;
    }
    .sign-up-info {
      font-family: Poppins;
      font-size: 18px;
      font-weight: 400;
      line-height: 37px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .right {
    flex: 3;
    padding-left: 170px;
    padding-top: 145px;
    padding-right: 170px;
    background: #dee4f3;
    .sign-up {
      font-family: Nunito;
      font-size: 64px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      .sign {
        color: #2e2c2c;
      }
      .up {
        color: #0c4ca3;
      }
      padding-bottom: 13px;
    }
    .already-have-account-log-in {
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 206.5%;
      .already-have-account {
        color: #8c8888;
      }
      .log-in {
        color: #0c4ca3;
      }
      padding-bottom: 49px;
    }
    input.info {
      padding: 8px 27px;
      margin-bottom: 44px;
      border: none;
      border-radius: 15px;
      color: rgba(140, 136, 136, 0.5);
      width: 100%;
    }
    .selections {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 40px;
    }
    .i-am-a {
      padding-bottom: 10px;
    }
  }
`;

const SignUp = () => {
  return (
    <StyledSignUp>
      <div className="left">
        <div className="sign-up-logo-info">
          <img className="sign-up-logo" src={KITSLogo} alt="" />
          <div className="welcome-to-kits">Welcome to KITS!</div>
          <div className="sign-up-info">
            KITS connects students and their families with qualified tutors for
            improved learning outcomes.
          </div>
        </div>
        <img className="sign-up-banner" src={SignUpBanner} alt="" />
      </div>
      <div className="right">
        <div className="sign-up">
          <span className="sign">Sign</span>
          <span className="up"> Up</span>
        </div>
        <div className="already-have-account-log-in">
          <span className="already-have-account">Already have an account?</span>
          <a className="log-in"> Log in</a>
        </div>
        <form action="" method="post">
          <input className="info" type="text" placeholder="Full name" />
          <br />
          <input className="info" type="text" placeholder="Email" />
          <br />
          {/* Password field should have eye icon to show password */}
          <input className="info" type="password" placeholder="Password" />
          <br />
          <div className="i-am-a">I am a</div>
          <div className="selections">
            <label htmlFor="">
              <input type="radio" name="1" id="" /> Tutor
            </label>
            <label htmlFor="">
              <input type="radio" name="1" id="" /> Student
            </label>
          </div>
          <Button bgColor={"#0C4CA3"} width={218} height={269}>
            Sign Up
          </Button>
        </form>
      </div>
    </StyledSignUp>
  );
};
export default SignUp;
