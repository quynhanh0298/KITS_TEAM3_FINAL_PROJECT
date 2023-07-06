import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as KitLogo } from "../../../assets/images/kits-logo.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboardicon/dashboard-icon.svg";
import { ReactComponent as MessIcon } from "../../../assets/icons/dashboardicon/mess-icon.svg";
import { ReactComponent as MyTutorsIcon } from "../../../assets/icons/dashboardicon/mytutors-icon.svg";
import { ReactComponent as PurchaseIcon } from "../../../assets/icons/dashboardicon/purchase-icon.svg";
import { ReactComponent as SessionsIcon } from "../../../assets/icons/dashboardicon/sessions-icon.svg";
import { ReactComponent as YellowCircleIcon } from "../../../assets/icons/dashboardicon/circle-icon.svg";
import { ReactComponent as RedCircleIcon } from "../../../assets/icons/dashboardicon/red-circle-icon.svg";
import { ReactComponent as BlueCircleIcon } from "../../../assets/icons/dashboardicon/blue-circle-icon.svg";
const StyledSidebar = styled.div`
  width: 100%;
  padding-right: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .KitLogo {
    margin-left: 63px;
  }
  .top-sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
    margin-top: 68px;
  }
  .noti {
    width: 17px;
    height: 17px;
    border-radius: 5px;
    background: #ff8282;
  }
  .class-text {
    color: #c7c4c4;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 22px 0px 22px 63px;
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  a {
    display: flex;
    text-decoration: unset;
    color: #7a797d;
    align-items: center;
    margin-left: 63px;
    gap: 16px;
  }
  .active {
    svg {
      path {
        stroke: #0c4ca3;
        fill: #0c4ca3;
      }
    }
    color: #0c4ca3;
  }
  .NavLink {
    width: 100%;
  }
`;
const NavItem = ({ path, text, icon, children }) => {
  return (
    <StyledNavItem>
      <NavLink to={path}>
        {icon}
        {text}
      </NavLink>
      {children}
    </StyledNavItem>
  );
};
export const Sidebar = () => {
  return (
    <StyledSidebar>
      <KitLogo className="KitLogo" width="99px" height="36px"></KitLogo>
      <div className="top-sidebar">
        <NavItem
          text="Dashboard"
          path="/mainboard/dashboard"
          icon={<DashboardIcon />}
        />
        <NavItem text="Messages" path="/mainboard/messages" icon={<MessIcon />}>
          <div className="noti" />
        </NavItem>
        <NavItem
          text="Sessions"
          path="/mainboard/sessions"
          icon={<SessionsIcon />}
        />
        <NavItem
          text="Hour purchase history"
          path="/mainboard/hour-purchase-history"
          icon={<PurchaseIcon />}
        />
        <NavItem
          text="My tutors"
          path="/mainboard/my-tutors"
          icon={<MyTutorsIcon />}
        />
      </div>
      <div className="class-text">Classes</div>
      <div className="bottom-sidebar">
        <NavItem text="Design" icon={<YellowCircleIcon />} />
        <NavItem text="Development" icon={<BlueCircleIcon />} />
        <NavItem text="Illustrations" icon={<RedCircleIcon />} />
      </div>
    </StyledSidebar>
  );
};
