import styled from "styled-components";
import { DButton } from "../DashboardButton";
import avt from "../../../assets/icons/dashboardicon/Avt-Icon.svg";
import { useNavigate } from "react-router-dom";
import { InputField } from "../InputField/InputField";

const PageStyled = styled.div`
  h2 {
    color: #2e2c2c;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
  }
  .head-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 47px;
  }
  .button-wrapper {
    display: flex;
    flex-direction: row;
  }
  .DButton {
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .avt-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .settings {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .left,
  .right {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 40px;
  }
`;
export const SettingsContentsPage = () => {
  const navigate = useNavigate();
  return (
    <PageStyled>
      <div className="head-wrapper">
        <h2>Profile</h2>
        <div className="button-wrapper">
          <DButton
            bgColor="#0C4CA3"
            textColor="#FFF"
            borderRadius="25px"
            width="91px"
            height="37px"
          >
            Save
          </DButton>
          <DButton
            onClick={() => navigate(-1)}
            borderRadius="25px"
            width="91px"
            height="37px"
          >
            Cancel
          </DButton>
        </div>
      </div>
      <div className="avt-wrapper">
        <img src={avt} alt="" width="83px" height="83px" />
        <DButton textColor="#0C4CA3">Edit</DButton>
      </div>
      <form className="settings">
        <div className="left">
          <InputField
            labelText="Student Fullname"
            inputType=""
            value="randomvalue"
          />
        </div>
        <div className="right">
          <InputField
            labelText="Student Fullname"
            inputType=""
            value="randomvalue"
          />
          <InputField
            labelText="Student Fullname"
            inputType=""
            value="randomvalue"
          />
          <InputField
            labelText="Student Fullname"
            inputType=""
            value="randomvalue"
          />
          <InputField
            labelText="Student Fullname"
            inputType=""
            value="randomvalue"
          />
        </div>
      </form>
    </PageStyled>
  );
};
