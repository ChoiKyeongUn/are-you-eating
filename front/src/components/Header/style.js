import styled from "styled-components";
import { colors } from "../../styles";

export const Box = styled.div`
  width: 100%;
  height: 65px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 999;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 55px;
    cursor: pointer;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
  }
  input {
    padding: 5px 5px 5px 34px;
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
    min-width: 400px;
    background-color: ${colors.lightGray};
    border-radius: 6px;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    cursor: pointer;
  }
`;
