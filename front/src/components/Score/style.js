import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  position: relative;
  .block {
    position: absolute;
    width: ${(props) => `${100 - props.percent}%`};
    height: 100%;
    right: 0;
    background-color: white;
  }
  img {
    width: 30px;
    cursor: pointer;
    visibility: ${(props) => (props.percent === 0 ? "hidden" : "visible")};
  }
`;
