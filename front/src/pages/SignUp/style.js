import styled from "styled-components";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  width: 1000px;
  height: 580px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-image: url("images/sign_bg.png");
  background-repeat: no-repeat;
  background-position: 100%;
`;

export const SignUpBox = styled.div`
  height: 100%;
  width: 550px;
  background-color: white;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .inputs {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;
  }
  .box {
    display: flex;
    flex-direction: row;
    .radio-box {
      height: 45px;
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .radio-item {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        .input {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: white;
          border: 2px solid ${colors.yellow};
          position: relative;
        }
        .checked::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: ${colors.yellow};
          border-radius: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
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
