import styled from "styled-components";
import { DropdownSelector } from "../Selector";
import { Button } from "components/Button/Button";

const PageStyled = styled.div`
  h3 {
    color: #464444;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 40px 0px 13px 0px;
    min-width: 102px;
  }
  .filter-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .filter-button {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 27px;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 20px;
    box-shadow: 0 1px 0 0 #edebeb;
  }
  .card-test {
    width: 375px;
    height: 422px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 33px;
    box-shadow:
      0px 4px 34px 0px rgba(0, 0, 0, 0.05),
      0px -4px 34px 0px rgba(0, 0, 0, 0.05);
  }
  .cards-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const MyCoursesContents = () => {
  return (
    <PageStyled>
      <h3>Filter</h3>
      <div className="filter-group">
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Class" />
      </div>
      <div className="filter-button">
        <Button
          width="165px"
          height="52px"
          borderRadius="37px"
          bgColor="#0C4CA3"
        >
          Filter
        </Button>
      </div>
      <div className="cards-wrapper">
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
        <div className="card-test"></div>
      </div>
    </PageStyled>
  );
};
