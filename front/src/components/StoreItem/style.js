import styled from "styled-components";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  min-height: 410px;
  width: 320px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  padding: 10px;
  img {
    width: 100%;
    height: 235px;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 24px;
  }
  .tags {
    font-size: 14px;
    color: ${colors.gray};
    margin-bottom: 5px;
  }
  .address {
    margin-top: 5px;
    font-size: 14px;
  }
  .tel {
    margin-top: 5px;
    font-size: 14px;
  }
`;
