import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  width: 80vw;
  min-height: 580px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-image: url("images/sign_bg.png");
  background-repeat: no-repeat;
  background-position: 100%;
`;

export const LogInBox = styled.div`
  height: 100%;
  width: 550px;
  background-color: white;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .text {
    margin-bottom: 40px;
  }
  .inputs {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .buttons {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h1 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 500;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.gray};
  }
`;
export const InputWithMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .message {
    font-size: 14px;
    height: 14px;
    color: ${colors.red};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 8px 10px;
  outline: none;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  height: 45px;
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  background-color: ${(props) => (props.outline ? "white" : colors.yellow)};
  color: ${(props) => (props.outline ? colors.yellow : "white")};
  border: ${(props) => (props.outline ? `1px solid ${colors.yellow}` : "none")};
  height: 40px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`;
