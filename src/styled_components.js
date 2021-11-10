import styled from "styled-components";

export const ScrollButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 0px;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  background-color: rgba(41, 44, 55, 0.5);
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 20px 0 20px;
  &:hover {
    background-color: rgb(41, 44, 55);
    cursor: pointer;
  }
`;
export const ArrowImg = styled.img`
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
  marginleft: -15px !important;
  marginbottom: 5px !important;
`;
