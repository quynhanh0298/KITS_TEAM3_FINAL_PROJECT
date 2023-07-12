import styled from "styled-components"
import courseImage1 from 'assets/images/courses/course2.svg'
const CardStyled = styled.div`
    width: 100%;
    width: 465px;
    height: 513px;
`

export const Card = () => {
    return <CardStyled>
        <div className="img">
            <img src={courseImage1}/>
        </div>
    </CardStyled>
}