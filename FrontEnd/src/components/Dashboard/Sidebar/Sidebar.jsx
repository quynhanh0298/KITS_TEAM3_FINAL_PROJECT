import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ReactComponent as KitLogo } from "../../../assets/images/kits-logo.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboardicon/dashboard-icon.svg";
import { ReactComponent as MessIcon } from "../../../assets/icons/dashboardicon/mess-icon.svg";
import { ReactComponent as MyTutorsIcon } from "../../../assets/icons/dashboardicon/mytutors-icon.svg";
import { ReactComponent as PurchaseIcon } from "../../../assets/icons/dashboardicon/purchase-icon.svg";
import { ReactComponent as SessionsIcon } from "../../../assets/icons/dashboardicon/sessions-icon.svg";
import { ReactComponent as ArrowPointDown } from "../../../assets/icons/dashboardicon/arrow-point-down.svg";
import { MyClassesCard } from "../MyClassesCard";
const StyledSidebar = styled.div`
  width: 100%;
  min-width: 355px;
  padding-left: 63px;
  padding-right: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .KitLogo {
    margin-top: 59px;
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
    margin: 22px 0px 22px 0px;
  }
  .bottom-sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
  }
  .show {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 23.93px;
    cursor: pointer;
    color: #cbcbcb;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  @media screen and (max-width: 1224px) {
    padding: 0px;
    align-items: center;
    .show {
      text-align: center;
      justify-content: center;
    }
    .bottom-sidebar {
      margin-top: 75.49px;
    }
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
  @media screen and (max-width: 1224px) {
    padding: 0px;
    justify-content: center;
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
  const [isOpen, setOpen] = useState(false);
  const toggleShowMore = () => setOpen(!isOpen);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <StyledSidebar>
      {isDesktopOrLaptop && (
        <KitLogo className="KitLogo" width="99px" height="36px" />
      )}
      {isTabletOrMobile && (
        <KitLogo className="KitLogo" width="99px" height="36px" />
      )}
      <div className="top-sidebar">
        {isDesktopOrLaptop && (
          <>
            <NavItem
              text="Dashboard"
              path="/mainboard/dashboard"
              icon={<DashboardIcon />}
            />
            <NavItem
              text="Messages"
              path="/mainboard/messages"
              icon={<MessIcon />}
            >
              <div className="noti" />
            </NavItem>
            <NavItem
              text="Sessions"
              path="/mainboard/sessions"
              icon={<SessionsIcon />}
            />
            <NavItem
              text="My Courses"
              path="/mainboard/my-courses"
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
          </>
        )}

        {isTabletOrMobile && (
          <>
            <NavItem path="/mainboard/dashboard" icon={<DashboardIcon />} />
            <NavItem path="/mainboard/messages" icon={<MessIcon />} />
            <NavItem path="/mainboard/sessions" icon={<SessionsIcon />} />
            <NavItem
              path="/mainboard/hour-purchase-history"
              icon={<PurchaseIcon />}
            />
            <NavItem path="/mainboard/my-tutors" icon={<MyTutorsIcon />} />
          </>
        )}
      </div>
      {isDesktopOrLaptop && <div className="class-text">Classes</div>}
      <div className="bottom-sidebar">
        {isDesktopOrLaptop && (
          <>
            <MyClassesCard
              name="Design"
              quantity={5}
              newColor="#FED66F"
              path="/mainboard/my-classes"
            />
            <MyClassesCard
              name="Development"
              quantity={5}
              newColor="#77ADFF"
              path="/mainboard/my-classes"
            />
            <MyClassesCard
              name="Illustrations"
              quantity={5}
              newColor="#F66E6E"
              path="/mainboard/my-classes"
            />
            {isOpen && (
              <>
                <MyClassesCard
                  name="Design"
                  quantity={5}
                  newColor="#FED66F"
                  path="/mainboard/my-classes"
                />
                <MyClassesCard
                  name="Development"
                  quantity={5}
                  newColor="#77ADFF"
                  path="/mainboard/my-classes"
                />
                <MyClassesCard
                  name="Illustrations"
                  quantity={5}
                  newColor="#F66E6E"
                  path="/mainboard/my-classes"
                />
              </>
            )}
            {isOpen && (
              <div className="show" onClick={toggleShowMore}>
                <ArrowPointDown style={{ transform: "rotate(180deg)" }} />
                Show less
              </div>
            )}
            {!isOpen && (
              <div className="show" onClick={toggleShowMore}>
                <ArrowPointDown />
                Show more
              </div>
            )}
          </>
        )}
        {isTabletOrMobile && (
          <>
            <MyClassesCard newColor="#FED66F" path="/mainboard/my-classes" />
            <MyClassesCard newColor="#FED66F" path="/mainboard/my-classes" />
            <MyClassesCard newColor="#FED66F" path="/mainboard/my-classes" />
            {isOpen && (
              <>
                <MyClassesCard
                  newColor="#FED66F"
                  path="/mainboard/my-classes"
                />
                <MyClassesCard
                  newColor="#FED66F"
                  path="/mainboard/my-classes"
                />
                <MyClassesCard
                  newColor="#FED66F"
                  path="/mainboard/my-classes"
                />
              </>
            )}
            {isOpen && (
              <div className="show" onClick={toggleShowMore}>
                <ArrowPointDown style={{ transform: "rotate(180deg)" }} />

                {isDesktopOrLaptop && <>Show less</>}
              </div>
            )}
            {!isOpen && (
              <div className="show" onClick={toggleShowMore}>
                <ArrowPointDown />
                {isDesktopOrLaptop && <>Show more</>}
              </div>
            )}
          </>
        )}
      </div>
    </StyledSidebar>
  );
};
