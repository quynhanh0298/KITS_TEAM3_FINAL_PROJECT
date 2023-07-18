import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StudentReviewCard, TutorCard } from "../DashboardCard";
import fakeData from "../../../TUTOR_CARD_MOCK_DATA.json";
import fakeData2 from "../../../STUDENT_REVIEWS_MOCK_DATA.json";
import fakeData3 from "../../../TUTOR_RANKING_MOCK_DATA.json";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/dashboardicon/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/dashboardicon/arrow-right.svg";
import { useState } from "react";
import { TutorHoverCard } from "../DashboardCard/TutorHoverCard";
import { TutorRankingTable } from "../Table";

const PageStyled = styled.div`
  margin: 52px 99px 0px 68px;
  background: "rgba(255, 255, 255, 0.7)";
  backdrop-filter: blur(62px);

  .head-page {
    padding-bottom: 24px;
    box-shadow: 0 1px 0 0 #edebeb;
    h3 {
      color: #8c8888;
      font-family: Poppins;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    h1 {
      color: #2e2c2c;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  .slider-content {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    .slider-content-head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 17px;
      span {
        color: #2e2c2c;
        font-family: Poppins;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .arrows-group {
        display: flex;
        gap: 13px;
      }
    }
  }
  .react-multi-carousel-list {
    border-radius: 13px;
  }
  .carousel-container {
    width: 100%;
    border-radius: 13px;
  }
  .carousel-container .react-multi-carousel-track {
    gap: 100px;
  }
  .react-multi-carousel-item {
    max-width: 438px;
    min-width: 360px;
  }
  .ranking-table {
    margin-top: 66px;
    h2 {
      color: #2e2c2c;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const reviewResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const DashboardContents = () => {
  const [isShow, setIsShow] = useState(false);
  const [getId, setId] = useState();
  const [getStudentReview, setStudentReview] = useState();
  return (
    <PageStyled>
      <div className="head-page">
        <h1>Welcome back, Abiola!</h1>
        <h3>
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            weekday: "long",
          }) + ""}
        </h3>
      </div>
      <div className="slider-content">
        <div className="slider-content-head">
          <span>Your recommendations</span>
          <div className="arrows-group">
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>
        <Carousel
          responsive={responsive}
          centerMode={true}
          partialVisbile={false}
          infinite={true}
        >
          {fakeData.map((o) => {
            return (
              <TutorCard
                bgColor="#D0C1F1"
                avatar={o.avatar}
                isVerified="true"
                tutorName={o.name}
                tutorSchool={o.school_name}
                rating={o.rating}
                status={o.status}
                onMouseEnter={() => {
                  setIsShow(true);
                  setId(o.id);
                  setStudentReview(o.rating);
                }}
                onMouseLeave={() => setIsShow(false)}
              />
            );
          })}
        </Carousel>
        {isShow && (
          <TutorHoverCard
            id={getId}
            bgColor="#D0C1F1"
            onMouseEnter={() => {
              setIsShow(true);
            }}
            onMouseLeave={() => setIsShow(false)}
            rating={getStudentReview}
          >
            <Carousel
              responsive={reviewResponsive}
              centerMode={true}
              partialVisbile={false}
              containerClass="carousel-container"
              autoPlay
              autoPlaySpeed={5000}
              itemClass="carouselItem"
              infinite={true}
            >
              {fakeData2.map((o) => {
                return (
                  <StudentReviewCard
                    reviewsContent={o.reviews_content}
                    reviewsDate={o.reviews_date}
                    avatar={o.avatar}
                    studentName={o.student_name}
                    studentType={o.student_type}
                    rating={o.rating}
                  />
                );
              })}
            </Carousel>
          </TutorHoverCard>
        )}
        <div className="ranking-table">
          <h2>Best tutors of the week</h2>
          <TutorRankingTable inputData={fakeData3}/>
        </div>
      </div>
    </PageStyled>
  );
};
