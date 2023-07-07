import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 67px;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    color: #8c8888;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .right {
    display: flex;
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #d9d9d9;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #8c8888;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .head > svg {
    circle {
      fill: "red";
    }
    fill: "red";
  }
`;
const CircleIcon = ({ fill }) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle id="Ellipse 9" cx="4" cy="4" r="4" fill={fill} />
  </svg>
);
export const MyClassesCard = ({ newColor, name, quantity, path }) => {
  return (
    <NavLink to={path}>
      <DivStyled newColor={newColor} name={name} quantity={quantity}>
        <div className="left">
          <CircleIcon fill={newColor} />
          {name}
        </div>
        <div className="right">{quantity}</div>
      </DivStyled>
    </NavLink>
  );
};
