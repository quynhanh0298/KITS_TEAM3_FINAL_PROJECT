import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { Button } from "components/Button/Button";
import personAvt from "../../assets/images/personAvt.svg";
import detailsPageBg from "../../assets/images/detailsPageBg.svg";

const StyleCourseDetailsBanner = styled.div`
  height: 1196px;
  padding-top: 176px;
  width: 70%;
  .wrapper-popular-categlories {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }
  .categlory {
    color: #96989b;
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .banner-title {
    color: #504e4e;
    font-size: 60px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 82px;
  }
  .description {
    color: #96989b;
    font-size: 26px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 196.5%;
    margin-top: 42px;
  }
  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 42px;
  }
  .rate {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .rating-number,
  .rating-number span {
    color: #2e2c2c;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .rating-number {
    font-size: 25px;
  }
  .rating-number span {
    font-size: 41px;
  }
  .reviews-count {
    color: #96989b;
    font-size: 26px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 196.5%;
  }
  .enroll-count {
    color: #96989b;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .mentor {
    display: flex;
    align-items: flex-end;
    gap: 34px;
    margin-top: 80px;
  }
  .mentor-name {
    color: #96989b;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .mentor-name span {
    color: #2e2c2c;
  }
  .start-group {
    display: flex;
    align-items: center;
    gap: 43px;
    margin-top: 105px;
  }
  .start-group-text {
    color: #2e2c2c;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  Button {
    color: #fff;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const CourseDetailsBanner = () => {
  return (
    <StyleCourseDetailsBanner>
      <div className="wrapper-popular-categlories">
        <div className="categlory">#Popular categories</div>
        <div className="categlory">#Computer science</div>
        <div className="categlory">#Mobile and web development</div>
        <div className="categlory">#Programming</div>
      </div>
      <div className="banner-title">
        Web design and development Crash course 2022
      </div>
      <div className="description">
        Launch your career as a website designer and developer. Build job-ready
        skills for an in-demand career and earn a credential from Meta. No
        degree or prior experience required to get started.{" "}
      </div>
      <div className="rating">
        <div className="rate">
          <StarRatings
            rating={4.5}
            starDimension="35px"
            starSpacing="5px"
            starRatedColor="#FED66F"
          />
          <div className="rating-number">
            <span>4.8</span>/5.0
          </div>
        </div>
        <div className="reviews-count">722 reviews</div>
        <div className="enroll-count">2,320 already enrolled</div>
      </div>
      <div className="mentor">
        <img src={personAvt} alt="" />
        <div className="mentor-name">
          Taught by <span>Diallo Liam</span>
        </div>
      </div>
      <div className="start-group">
        <div className="start-group-text">Start as early as Today</div>
        <Button
          bgColor="#0C4CA3"
          width="251px"
          height="81px"
          borderRadius="55px"
          fontSize="32px"
        >
          Enroll
        </Button>
      </div>
    </StyleCourseDetailsBanner>
  );
};
