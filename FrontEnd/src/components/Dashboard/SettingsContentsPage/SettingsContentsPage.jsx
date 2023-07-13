import styled from "styled-components";
import { DButton } from "../DashboardButton";

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
`;
export const SettingsContentsPage = () => {
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
          <DButton borderRadius="25px" width="91px" height="37px">
            Cancel
          </DButton>
        </div>
      </div>
    </PageStyled>
  );
};
