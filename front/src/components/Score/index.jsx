import { Item, Wrapper } from "./style";

export function Score({ score }) {
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((s) => (
        <Item
          className="item"
          key={s}
          percent={
            s <= score ? 100 : s >= score + 1 ? 0 : (1 - (s - score)) * 100
          }
        >
          <div className="block"></div>
          <img src="/images/score.png" alt="" />
        </Item>
      ))}
    </Wrapper>
  );
}
