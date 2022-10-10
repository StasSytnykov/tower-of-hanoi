import styled from "styled-components";

const PegsListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 100px;
`;

const PegsItemStyled = styled.li`
  position: relative;
`;

const CenterStick = styled.div`
  width: 15px;
  height: 300px;
  border-radius: 20px 20px 0 0;
  background-color: darkred;

  margin: 0 auto;
`;

const BottomStick = styled.div`
  width: 300px;
  border-radius: 20px;
  border-bottom: 15px solid darkred;
`;

export { PegsListStyled, PegsItemStyled, CenterStick, BottomStick };
