import Slider from "components/Slider/Slider";
import GoodDesign from "components/GoodDesign/GoodDesign";
import Discover from "components/Discover/Discover";
import Brand from "components/Brand/Brand";
import Categories from "components/Categories/AllProduct";
import styled from "styled-components";
import { AddCourse } from "components/Dashboard/AddCourse/AddCourse";
const PageStyled = styled.div`
  font-family: Poppins;
`;
const Home = () => {
  return (
    <PageStyled>

    {/* my demo */}
    <AddCourse/>
      <Slider />
      <Brand />
      <Categories />
      <GoodDesign />
      <Discover />
    </PageStyled>
  );
};
export default Home;
