import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  .item {
    img {
      width: 30px;
      cursor: pointer;
    }
    .disabled {
      opacity: 0.3;
    }
  }
`;
