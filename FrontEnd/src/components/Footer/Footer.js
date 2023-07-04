import styled from "styled-components";
import '../../App.css'
import kits from 'assets/images/kits-logo.svg'
const FooterStyled = styled.div`
    
    background: #0C4CA3;
    height: 50px;
    width: calc(100vw - var(--scrollbar-width));
    margin-left: calc(50% - 50vw);
    /* display: flex;
    justify-content: space-evenly;
    align-items: center; */
    /* border-top: 1px solid rgba(0,0,0,0.15); */

`
const Footer = () => {
    return <FooterStyled>
        <div className="wrapper-home-details-about-pricing">

            <div className="left-footer">
                <div>
                    <img src={kits}/>
                </div>
                <div className="media">
                    
                </div>
            </div>
        </div>
    </FooterStyled>
}
export default Footer;