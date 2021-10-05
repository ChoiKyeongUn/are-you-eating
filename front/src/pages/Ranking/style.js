import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10vw;
  gap: 20px;
  h1 {
    margin-bottom: 20px;
  }
`;

export const Wrapper1 = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-width: 450px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    position: relative;
    text-align: center;
    .icon {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    object-fit: cover;
  }

  .username {
    font-size: 30px;
  }
  .count {
    font-size: 20px;
    color: ${colors.yellow};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-width: 450px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  .ranking {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    font-size: 30px;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    object-fit: cover;
  }
  .icon {
  }

  .username {
    font-size: 24px;
  }
  .count {
    font-size: 16px;
    color: ${colors.yellow};
  }
`;
