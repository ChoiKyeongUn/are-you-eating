import styled from "styled-components";
import { colors } from "../../styles";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
  span {
    font-size: 14px;
    color: ${colors.gray};
  }
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
    visibility: ${(props) => (props.percent === 0 ? "hidden" : "visible")};
  }
`;
