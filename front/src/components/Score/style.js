import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .block {
    position: absolute;
    width: ${(props) => `${100 - props.percent}%`};
    height: 100%;
    right: 0;
    background-color: white;
  }
  img {
    width: ${(props) => (props.size ? `${props.size}px` : "25px")};
    cursor: pointer;
    visibility: ${(props) => (props.percent === 0 ? "hidden" : "visible")};
  }
`;
