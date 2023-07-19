import styled from "styled-components";
import { Sidebar } from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { DashboardHeader } from "../DashboardHeader";
import { ProfileColumn } from "../ProfileColumn";
const Container = styled.div`
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  background-size: 400% 400%;
  justify-content: center;
`;

const StyleLayout = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  min-height: 1450px;
  width: 1728px;
  display: flex;
  flex-direction: row;
  .right {
    float: right;
    width: 80%;
  }
  @media screen and (max-width: 1224px) {
    .right {
      width: 90%;
    }
  }
`;
const SideBarStyled = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.04);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  float: left;
  width: 25%;
  height: 1450px;
  @media screen and (max-width: 1224px) {
    width: 10%;
  }
`;
export const DashboardLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <StyleLayout>
        <SideBarStyled>
          <Sidebar />
        </SideBarStyled>{" "}
        {location.pathname !== "/mainboard/dashboard" && (
          <>
            <div className="right">
              <DashboardHeader />
              <Outlet />
            </div>
          </>
        )}
        {location.pathname === "/mainboard/dashboard" && (
          <>
            <div className="right" style={{ width: "50%" }}>
              <DashboardHeader />
              <Outlet />
            </div>
            <ProfileColumn />
          </>
        )}
      </StyleLayout>
    </Container>
  );
};
