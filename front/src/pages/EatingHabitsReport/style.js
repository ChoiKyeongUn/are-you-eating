import styled from "styled-components";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  width: 80vw;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px 20px;
  div{
      text-align: center;
  }
  h1{
    margin-top : 100px;
    align : center;
  }
  div h5{
    align : center;
    font-color: ${colors.gray}; 
  } 
`;
