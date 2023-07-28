import styled from "styled-components";
import React, { useState } from "react";
import { DropdownSelector } from "../Selector";
import { CalenderSelector } from "../Selector";
import { Button } from "components/Button/Button";
import fakeData from "../../../LIST_CLASS_MOCK_DATA.json";
import { ClassCard } from "../DashboardCard";

const MyClassPageContentsStyled = styled.div`
  height: 1273px;
  padding-top: 47px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h3 {
    color: #464444;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 91px 0px 13px 0px;
    min-width: 102px;
  }
  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .input-styled {
    border: #d3d3d3 solid;
    border-radius: 10px;
    outline: none;
    background: #fff;
    width: 50%;
    height: 52px;
    flex-shrink: 0;
    padding: 0px 10px;
  }
  .filter-button {
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 20px;
    box-shadow: 0 1px 0 0 #edebeb;
  }
  .view-calendar {
    width: 10%;
    height: 22px;
    margin-top: 22px;
    color: #0c4ca3;
    text-align: left;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .class-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 5px;
  }
  @media screen and (max-width: 1212px) {
    align-items: center;
    .form-group {
      flex-direction: column;
    }
    .view-calendar {
      width: 100%;
      text-align: left;
    }
    .input-styled{
      width: 100%;
    }
  }
`;

export const AddCoursesContents = () => {
  return (
    <MyClassPageContentsStyled>
      <div className="form-group">
        <label>Title</label>
        <br />
        <input className="input-styled" type="" placeholder="Title" />
        <br />
        <label>Description</label>
        <br />
        <input className="input-styled" type="" placeholder="Description" />
        <br />
        <label>Thumbnail</label>
        <br />
        <input className="input-styled" type="" placeholder="Thumbnail" />
        <br />
        <label>Tutor name</label>
        <br />
        <input className="input-styled" type="" placeholder="Tutor name" />
        <br />
        <label>Video</label>
        <br />
        <input className="input-styled" type="" placeholder="Video" />
        <br />
      </div>
      <Button bgColor="green">Add Video</Button>
      <div className="class-wrapper">
        {/* {fakeData.map((course) => (
          <PopupDetails
            avatar={course.avatar}
            thumbnail={course.thumbnail}
            tutorName={course.tutorName}
            courseName={course.courseName}
            rating={course.rating}
            detail={course.detail}
            totalHours={course.totalHours}
          />
        ))} */}
      </div>
    </MyClassPageContentsStyled>
  );
};
