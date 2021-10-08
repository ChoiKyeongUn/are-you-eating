import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  width: 80vw;
  min-width: 800px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px 30px;

  .bottom {
    display: flex;
    gap: 20px;
    .left {
      width: 70%;
      display: flex;
      flex-direction: column;
    }
  }
  .add-review {
    margin-bottom: 20px;
    button {
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: auto;
  gap: 10px;
  display: flex;
  margin-bottom: 20px;
  .item {
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    align-items: center;
    gap: 20px;
    .title {
      font-size: 24px;
    }
    .score {
      display: flex;
      align-items: center;
    }
  }
  .tags {
    color: ${colors.gray};
    font-size: 14px;
  }
  .line {
    display: flex;
    margin-bottom: 5px;
    .key {
      min-width: 100px;
    }
    .value {
      flex-grow: 1;
    }
  }
`;

export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Recommend = styled.div`
  width: 30%;
  h3 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .item {
      display: flex;
      gap: 10px;
      cursor: pointer;
      .left {
        width: 120px;
        height: 120px;
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
      }
      .right {
        .name {
          font-size: 18px;
        }
        .tags {
          font-size: 12px;
          color: ${colors.gray};
          margin-bottom: 3px;
        }

        .address {
          font-size: 14px;
          color: ${colors.gray};
        }
      }
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 10px 0;
`;
