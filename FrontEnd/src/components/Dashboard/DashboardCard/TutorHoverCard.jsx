import styled from "styled-components";

const ContentsStyled = styled.div`
  width: 100%;
  height: 301px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  border-radius: 13px;

`;
export const TutorHoverCard = ({ id, bgColor }) => {
  return (
    <ContentsStyled bgColor={bgColor}>
      <div>{id}</div>
    </ContentsStyled>
  );
};
