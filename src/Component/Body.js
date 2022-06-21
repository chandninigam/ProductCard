import React, { useContext } from "react";
import { ToggleContext } from "../Context/ToggleContext";
import { v4 as uuid } from "uuid";

export const DUMMY_DATA = [
  {
    id: "1",
    productName: "Gaming Mouse",
    cost: "Rs.2,370"
  },
  {
    id: "2",
    productName: "Harry Porter Mouse",
    cost: "Rs.6,370"
  },
  {
    id: "3",
    productName: "Dolphine",
    cost: "Rs.1,370"
  },
  {
    id: "4",
    productName: "Amderder",
    cost: "Rs.3,770"
  }
];
// export const CARD_DATA = [];

export const Body = () => {
  // const {toggleState,setToggleState} = useContext(ToggleContext)
  const { toggleState, setCardData, cardData } = useContext(ToggleContext);

  // ADD PRODUCT TO CARD
  const addCard = (product) => {
    const isProduct = cardData.find(
      (cardProduct) => cardProduct.id === product.id
    );
    if (isProduct) {
      const newCardData = cardData.map((cp) => {
        if (cp.id === product.id) {
          return { ...cp, quantity: cp.quantity + 1 };
        }
        return cp;
      });
      setCardData(newCardData);
    } else {
      const initialData = { ...product, quantity: 1 };
      const newCardData = [...cardData, initialData];
      setCardData(newCardData);
    }
  };

  // REMOVE PRODUCT FROM CARD
  const removeCard = (product) => {
    const newCardData = cardData
      .map((cp) => {
        if (cp.id === product.id) {
          if (cp.quantity === 1) return null;
          return { ...cp, quantity: cp.quantity - 1 };
        }
        return cp;
      })
      .filter(Boolean);
    setCardData(newCardData);
  };
  return (
    <>
      <ul className={toggleState === 1 ? "tab-content" : "product-content"}>
        {DUMMY_DATA.map((each) => (
          <li key={each.id}>
            <div className="product-name">
              <span> {each.productName} -</span> {each.cost}
            </div>
            <button
              onClick={() => {
                console.log(`click on Add to Cart ${each.id}`);
                addCard(each);
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <div className={toggleState === 2 ? "tab-content" : "card-content"}>
        {cardData.map((each) => (
          // const uniquekey= uuid()
          <li key={uuid()}>
            <div className="product-name">
              <span> {each.productName} -</span> {each.cost}
              <span>Quantity :{each.quantity}</span>
            </div>
            <button
              onClick={() => {
                console.log(`click on remove to Cart ${each.id}`);
                removeCard(each);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </div>
    </>
  );
};
