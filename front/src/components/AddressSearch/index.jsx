import { useEffect } from "react";
import { useState } from "react";
import { Container, Wrapper } from "./style";

export default function AddressSearch({ modalClose, handleAddressSelect }) {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState([]);

  function onAddressClick(selectedAddress) {
    const address = {
      address: selectedAddress.address_name,
      latitude: selectedAddress.y,
      longitude: selectedAddress.x,
    };
    handleAddressSelect(address);
    modalClose();
  }

  function fetchResult() {
    fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
      {
        method: "get",
        headers: {
          Authorization: "KakaoAK 781ed2f07eb684a67bab44bffdcf861b",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.documents);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (address.length > 0) fetchResult();
  }, [address]);
  return (
    <Container onClick={modalClose}>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="input">
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="주소를 동단위로 입력해주세요"
          />
        </div>
        <div className="result">
          {result.map((item, i) => (
            <div
              className="item"
              key={i}
              onClick={() => {
                onAddressClick(item);
              }}
            >
              {item.address_name}
            </div>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
}
