import styled from "styled-components";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  height: 410px;
  width: 320px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  img {
    width: 100%;
    height: 235px;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  padding: 5px 10px;
  .top {
    display: flex;
    align-items: center;
    gap: 10px;
    .title {
      font-size: 20px;
    }
  }
  .mid {
    margin-bottom: 10px;
    .address {
      color: ${colors.gray};
      font-size: 14px;
    }
  }
  .bottom {
    .desc {
      font-size: 16px;
    }
  }
`;
