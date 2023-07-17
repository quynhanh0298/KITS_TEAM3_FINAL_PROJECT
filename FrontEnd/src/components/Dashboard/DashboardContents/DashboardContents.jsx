import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TutorCard } from "../DashboardCard";
import fakeData from "../../../TUTOR_CARD_MOCK_DATA.json";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/dashboardicon/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/dashboardicon/arrow-right.svg";
import { useState } from "react";
import { TutorHoverCard } from "../DashboardCard/TutorHoverCard";

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
      .arrows-group {
        display: flex;
        gap: 13px;
      }
    }
  }
  .carouselItem {
    padding-right: 40px;
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
// const ButtonGroup = ({ next, previous, ...rest }) => {
//   const {
//     carouselState: { currentSlide, totalItems, slidesToShow },
//   } = rest;
//   return (
//     <div className="carousel-button-group">
//       <ArrowLeft
//         className={
//           currentSlide === 0
//             ? "disable"
//             : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
//         }
//         onClick={() => previous()}
//       />
//       <ArrowRight
//         className={
//           currentSlide === totalItems - slidesToShow
//             ? "disable"
//             : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
//         }
//         onClick={() => next()}
//       />
//     </div>
//   );
// };
export const DashboardContents = () => {
  const [isShow, setIsShow] = useState(false);
  const [getId, setId] = useState();
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
        >
          {fakeData.map((o) => {
            return (
              <>
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
                  }}
                  onMouseLeave={() => setIsShow(false)}
                />
              </>
            );
          })}
        </Carousel>
        {isShow && <TutorHoverCard id={getId} bgColor="#D0C1F1" />}
      </div>
    </PageStyled>
  );
};
