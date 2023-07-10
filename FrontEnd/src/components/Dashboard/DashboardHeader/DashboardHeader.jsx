import styled from "styled-components";
import { SearchBar } from "../SearchBar";
import { ReactComponent as BellIcon } from "../../../assets/icons/dashboardicon/bell-icon.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/dashboardicon/Setting-Icon.svg";
import { ReactComponent as AvtHeadIcon } from "../../../assets/icons/dashboardicon/Avt-Icon.svg";

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 58px 69px 0px 62px;
  .header-right {
    display: flex;
    flex-direction: row;
    gap: 41px;
  }
`;
export const DashboardHeader = () => {
  return (
    <HeaderStyled>
      <SearchBar setPlaceholder="Search tutor" />
      <div className="header-right">
        <BellIcon cursor="pointer" />
        <SettingIcon cursor="pointer" />
        <AvtHeadIcon cursor="pointer" />
      </div>
    </HeaderStyled>
  );
};
