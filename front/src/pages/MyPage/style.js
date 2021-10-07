import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 20px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 60vw;
  min-width: 800px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  gap: 50px;
  position: relative;
  .image {
    width: 200px;
    height: 200px;
    position: relative;
    :hover {
      opacity: 0.5;
      cursor: pointer;
    }

    .edit-image {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
    label {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    input {
      display: none;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 5px;
    .line {
      display: flex;
      align-items: center;
      .key {
        width: 30%;
        color: ${colors.gray};
        font-size: 16px;
      }
      .value {
        width: 70%;
        font-size: 18px;
      }
    }
  }
  .modify {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    button {
      font-size: 14px;
      cursor: pointer;
    }
    .top {
      display: flex;
      gap: 10px;
      .cancel {
        color: ${colors.gray};
      }
    }
    .bottom {
      button {
        color: ${colors.red};
      }
    }
  }
`;

export const ReviewWrapper = styled.div`
  width: 60vw;
  min-width: 800px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
