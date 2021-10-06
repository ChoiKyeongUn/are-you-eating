import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: calc(100% - 65px);
`;

export const StoreList = styled.div`
  width: 30%;
  max-width: 500px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
  .filters {
    width: 100%;
    min-height: 70px;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
    .filter {
      border-radius: 10px;
      font-size: 16px;
      border: 2px solid ${colors.gray};
      color: ${colors.gray};
      padding: 5px 8px;
      cursor: pointer;
      background-color: transparent;
    }
    .selected {
      border: 2px solid ${colors.yellow};
      color: ${colors.yellow};
    }
  }
  .stores {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
    gap: 20px;
  }
`;

export const Store = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  .image {
    min-width: 100px;
    max-width: 100px;
    min-height: 100px;
    max-height: 100px;
    height: auto;
    background-color: ${colors.gray};
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 18px;
    }
    .category {
      font-size: 12px;
      color: ${colors.gray};
      margin-bottom: 3px;
    }
    .review {
      font-size: 14px;
    }
    .address {
      font-size: 12px;
    }
  }
`;

export const MapContainer = styled.div`
  width: 70%;
  height: 100%;
  flex-grow: 1;
`;

export const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const Spinner = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 6px solid ${colors.yellow};
  border-top-color: transparent;
  animation: spinner 0.8s ease-in infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
