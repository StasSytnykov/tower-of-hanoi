import styled from "styled-components";

const ListThumb = styled.div`
  position: absolute;
  left: 0;
  bottom: 15px;

  min-width: 300px;
  min-height: 315px;
`;

const DisksList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  position: absolute;
  left: 25px;
  bottom: 0;

  max-width: 250px;
  min-width: 250px;
`;

export { ListThumb, DisksList };
