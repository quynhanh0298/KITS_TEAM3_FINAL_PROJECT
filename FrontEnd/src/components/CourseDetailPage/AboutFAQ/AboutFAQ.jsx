import styled from "styled-components";
import { FaqCard, WhatYouWouldLearnCard } from "../Card";

const StyledDiv = styled.div`
  height: 2265px;
  display: block;
  background: #fafeff;
  margin-top: 100px;
  .background-opacity {
    height: 100%;
    background: #fafeff;
    opacity: 0.5;
  }
  .about-instructor {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
  }
  h2 {
    color: #2e2c2c;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 56px;
  }
  .about-instructor-details {
    color: #96989b;
    font-size: 26px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 214%;
    margin-left: 124px;
    margin-right: 140px;
    text-align: justify;
    margin-bottom: 78px;
  }
  .what-you-would-learn {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
  }
  .wrapper-card-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 141.34px;
  }
  .wrapper-card-row {
    display: flex;
    flex-direction: row;
    margin-left: 46px;
    margin-bottom: 67px;
    justify-content: space-between;
  }
  .faq {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
    gap: 44px;
  }
  .faq h2 {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 1315px) {
    .wrapper-card-row {
      flex-direction: column;
      margin-bottom: 0px;
    }
  }
`;

export const AboutFAQ = () => {
  return (
    <StyledDiv>
      <div className="about-instructor">
        <h2>About instructor</h2>
        <div className="about-instructor-details">
          "Tim's been a professional software developer for close to 40 years.
          During his career, he has worked for major companies such as Fujitsu,
          Mitsubishi, and Saab. His video courses are used to train developers
          in major companies such as Mercedes-Benz, Paypal, VW, Pitney Bowes,
          IBM, and T-Mobile just to name a few (via the Udemy for Business
          program). What makes Tim unique is his professional programming career
          - many instructors have never programmed professionally, let alone had
          a distinguished professional development career like Tim. Tim has
          trained over 1.33 million students how to program, way more than a
          typical IT Professor at a college does in a lifetime."
        </div>
      </div>
      <div className="what-you-would-learn">
        <h2>What you would learn</h2>
        <div className="wrapper-card-column">
          <div className="wrapper-card-row">
            <WhatYouWouldLearnCard>
              Learn the core Java skills needed to apply for Java developer
              positions in just 14 hours.
            </WhatYouWouldLearnCard>
            <WhatYouWouldLearnCard>
              Be able to sit for and pass the Oracle Java Certificate exam if
              you choose.
            </WhatYouWouldLearnCard>
          </div>
          <div className="wrapper-card-row">
            <WhatYouWouldLearnCard>
              Be able to demonstrate your understanding of Java to future
              employers.
            </WhatYouWouldLearnCard>
          </div>
        </div>
      </div>
      <div className="faq">
        <h2>FAQ’s</h2>
        <FaqCard question="Is this course really 100% online? Do I need to attend any classes in person?"></FaqCard>
        <FaqCard question="What do web designers and developers do?"></FaqCard>
        <FaqCard question="How long does it take to complete the specialization?"></FaqCard>
        <FaqCard question="What background knowledge is necessary?"></FaqCard>
        <FaqCard question="Do I need a certain device to take this course?"></FaqCard>
      </div>
    </StyledDiv>
  );
};
