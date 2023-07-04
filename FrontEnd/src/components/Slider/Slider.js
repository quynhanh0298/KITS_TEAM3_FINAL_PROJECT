import styled from "styled-components"
import '../../App.css'
import curve from 'assets/images/curve.svg'
import playIcon from 'assets/icons/playicon.svg'
import waveCheckIcon from 'assets/icons/wave-check.svg'
import { Button } from "components/Button/Button"
const SliderStyled = styled.div`
    height: 1000px;
    width: calc(100vw - var(--scrollbar-width));
    margin-left: calc(50% - 50vw);
    /* background-color: orange; */
    background: #F7F7F7;

    /* .welcome-wrapper{
        max-width: var(--max-width-home);
        margin: 0 auto;
    } */
    .welcome {
        padding-top: 300px;
        max-width: 750px;        
    }
    .welcome-header{
        font-size: 64px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        color: #2E2C2C;
    }
    .welcome-header-blue{
        color: #0C4CA3;
        display: block;
    }
    .welcome-desc{
        color: #96989B;
        font-size: 20px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        line-height: 193.5%;
        max-width: 630px;
    }
    .play-now{
        width: 84px;
        height: 84px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        align-items: center;
        justify-content: center;
        box-shadow: 0px -4px 10px 0px rgba(52, 188, 173, 0.25), 0px 4px 10px 0px rgba(52, 188, 173, 0.25);
        img{
            width: 52px;
            height: 52px;
        }
    }
    .join-and-play{
        display: flex;
        align-items: center;
    }
    .join-and-play-btn{
        margin-right: 40px;
    }
    .play-now{
        margin-right: 13px;
    }
    .play-now-text{
        color: #2E2C2C;
        font-size: 24px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`
const Slider = () => {
    return <SliderStyled>
        <div className="wrapper-home-details-about-pricing">
            <div className="welcome">

                <p className="welcome-header">
                    Access Your Class From
                    <span className="welcome-header-blue">Anywhere & Anytime</span>
                </p>
                <p className="welcome-desc">
                    A solution for easy and flexible online learning, you can study anywhere and at anytime on this platform
                </p>
                <img src={curve} />

                <div className="join-and-play">
                    <div className="join-and-play-btn">
                        <Button>Join For Free</Button>
                    </div>
                    <div className="play-now">
                        <img src={playIcon} />
                    </div>
                    <p className="play-now-text">Play now</p>
                </div>

                <div className="wave-check">
                    <ul>
                        <li>
                            <img src={waveCheckIcon}/>
                            <p>Experienced Instructors</p>
                        </li>
                        <li>
                            <img src={waveCheckIcon}/>
                            <p>Experienced Instructors</p>
                        </li>
                        <li>
                            <img src={waveCheckIcon}/>
                            <p>Experienced Instructors</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </SliderStyled>
}

export default Slider