import styled from "styled-components";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  width: 80vw;
  min-height: 580px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px 20px;
  h1 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

export const StoreList = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;
