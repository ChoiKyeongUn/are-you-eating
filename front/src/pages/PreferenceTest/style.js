import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  h1 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.gray};
    margin-bottom: 40px;
  }
  .foods {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 180px;
    gap: 40px;
    .food {
      width: 205px;
      height: 205px;
      cursor: pointer;
      position: relative;
      transition: transform 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      &.checked {
        background-color: ${colors.yellow};
        img {
          opacity: 0.7;
        }
      }
      img {
        width: 200px;
        height: 200px;
      }
      .icon {
        color: ${colors.yellow};
        font-size: 30px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
