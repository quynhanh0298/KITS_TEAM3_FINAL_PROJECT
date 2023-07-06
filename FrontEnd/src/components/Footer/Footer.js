import styled from "styled-components";
import '../../App.css'
import kits from 'assets/images/kits-logo.svg'
import Media from "components/Media/Media";
import facebookIcon from 'assets/icons/facebook.svg'
import tweetIcon from 'assets/icons/tweet.svg'
import indeedIcon from 'assets/icons/indeed.svg'
import youtubeIconIcon from 'assets/icons/youture.svg'
import instagramIcon from 'assets/icons/instagram.svg'

import appStore from 'assets/images/app-store.svg'
import googlePlay from 'assets/images/google-play.png'
const FooterStyled = styled.div`
    
    background: #0C4CA3;
    height: 590px;
    width: calc(100vw - var(--scrollbar-width));
    margin-left: calc(50% - 50vw);
    .media{
        display: flex;
        gap: 14px;
        margin-top: 60px;
    }
    .left-footer-end{
        color: #FFF;
        font-size: 16px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        line-height: 254.5%;
    }
    .left-right-footer{
        display: flex;
        padding-top: 34px;

    }

`
const Footer = () => {
    return <FooterStyled>
        <div className="wrapper-home-details-about-pricing left-right-footer">
            <div className="left-footer">
                <div>
                    <img src={kits} />
                </div>
                <div className="media">
                    <Media icon={facebookIcon} />
                    <Media icon={tweetIcon} />
                    <Media icon={indeedIcon} />
                    <Media icon={youtubeIconIcon} />
                    <Media icon={instagramIcon} />
                </div>
                <p className="left-footer-end">© Copyright Leon Inc 2023. All rights reserved</p>
            </div>

            <div className="right-footer">
                <div className="right-footer1">
                    <p>Useful Links</p>
                    <p>Safety and Security Policies</p>
                    <p>About</p>
                    <p>Pricing</p>
                    <p>Value Code</p>
                    <p>Legal</p>
                    <img src={appStore}/>
                </div>

                <div className="right-footer2">
                    <p>Contact Us</p>
                    <p>support@kits.com</p>
                    <p>1-800-200-300</p>
                    <p>3500 Deer Crock Rd Palo Alto,CA</p>
                    <img src={googlePlay} />
                </div>
            </div>
        </div>
    </FooterStyled >
}
export default Footer;