import styled from "styled-components"
const MediaStyled = styled.div`

`

export default Media = ({icon}) => {
    return <MediaStyled>
        <img src={icon}/>
    </MediaStyled>
}