import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 65px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 55px;
  }
`;
export const Search = styled.div``;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  span {
    cursor: pointer;
  }
`;
