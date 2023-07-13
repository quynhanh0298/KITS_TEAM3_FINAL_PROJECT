import styled from "styled-components";
import { ReactComponent as KitLogo } from "../assets/images/kits-logo.svg";
import { SettingsContentsPage } from "components/Dashboard/SettingsContentsPage";
const SettingsPageStyled = styled.div`
  width: 60%;
  margin: 52px 260px 0px 370px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  h1 {
    color: #2e2c2c;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 48px;
    box-shadow: 0 1px 0 0 #edebeb;
  }
`;
const SettingsPage = () => {
  return (
    <>
      <KitLogo width="99px" height="36px" />
      <SettingsPageStyled>
        <h1>Settings</h1>
        <SettingsContentsPage />
      </SettingsPageStyled>
    </>
  );
};
export default SettingsPage;
