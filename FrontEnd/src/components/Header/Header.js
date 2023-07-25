import styled from "styled-components";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import logo from "assets/icons/logo192.png";
import KitsLogo from "assets/images/kits-logo.svg";
import userIcon from "assets/icons/user-regular.svg";
import searchIcon from "assets/icons/magnifying-glass-solid.svg";
import cartIcon from "assets/icons/cart-shopping-solid.svg";
const HeaderStyled = styled.div`
  height: 167px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px 4px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  p {
    color: #96989b;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .left-header {
    display: flex;
    align-items: center;
    margin-left: 16px;
    cursor: pointer;
  }
  .right-header {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("");
  };
  const goCart = () => {
    navigate("/cart");
  };

  const logout = () => {
    // Clear the token from local storage to log out the user
    localStorage.removeItem('token');
    // Optionally, you can redirect the user to the login page or any other page
    // window.location.href = '/login';
  };

  const handleLogout = () => {
    logout(); // Call the logout function to log out the user
    navigate("/login-page")
  };
  return (
    <HeaderStyled>
      <div className="left-header" onClick={goHome}>
        <img src={KitsLogo} style={{ width: "153px", height: "56px" }} />
      </div>
      <div className="right-header">
        <p style={{ cursor: "pointer" }} onClick={goHome}>
          Home
        </p>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/pricing")}>
          Pricing
        </p>
        
        <p style={{ cursor: "pointer" }} onClick={handleLogout}>
          LogOut
        </p>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/about")}>
          About us
        </p>
        <img src={userIcon} style={{ width: "20px", cursor: "pointer" }} />
        <img src={searchIcon} style={{ width: "20px", cursor: "pointer" }} />
        <img
          src={cartIcon}
          style={{ width: "20px", cursor: "pointer" }}
          onClick={goCart}
        />
      </div>
    </HeaderStyled>
  );
};
export default Header;
