import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 80vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-image: url("images/sign_bg.png");
  background-repeat: no-repeat;
  background-position: 100%;
  padding: 20px 10%;
  h2 {
    font-weight: 500;
    margin-bottom: 20px;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 10px 20px;
    resize: none;
    border-radius: 6px;
    margin-bottom: 20px;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    button {
      width: 100px;
      height: 42px;
      text-align: center;
      border-radius: 6px;
      font-size: 16px;
    }
    .complete {
      background-color: ${colors.yellow};
      color: white;
    }
    .cancel {
      color: ${colors.gray};
      border: 1px solid ${colors.gray};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  position: relative;
  height: 100%;
`;
