import styled from "styled-components";

const PegsListPageStyled = styled.ul`
  margin-top: 100px;
  margin-bottom: 50px;

  &:not(:last-child) {
    margin-right: 100px;
  }
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

const ListThumb = styled.div`
  position: absolute;
  left: 0;
  bottom: 15px;

  min-width: 300px;
  min-height: 315px;
`;

export {
  PegsListPageStyled,
  PegsItemStyled,
  CenterStick,
  BottomStick,
  ListThumb,
};
