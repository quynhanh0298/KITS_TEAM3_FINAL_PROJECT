import styled from "styled-components";
import Slider from "components/Slider/Slider";
import FavoritesProduct from "components/FavoritesProduct/FavoritesProduct";
import GoodDesign from "components/GoodDesign/GoodDesign";
import Discover from "components/Discover/Discover";
import AllProduct from "components/AllProduct/AllProduct";

const Home = () => {
    return <>
        <Slider />
        <FavoritesProduct />
        <AllProduct />
        <GoodDesign />
        <Discover />
    </>
}
export default Home;