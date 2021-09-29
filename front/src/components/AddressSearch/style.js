import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  height: 500px;
  background-color: white;

  .input {
    width: 100%;

    input {
      width: 100%;
      font-size: 18px;
      padding: 3px 8px;
    }
  }

  .result {
    width: 100%;
    cursor: default;
    .item {
      padding: 5px 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;
