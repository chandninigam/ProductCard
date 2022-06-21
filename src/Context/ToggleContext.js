import { createContext, useState } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [toggleState, setToggleState] = useState(1);
  const [cardData, setCardData] = useState([]);
  return (
    <ToggleContext.Provider
      value={{
        toggleState,
        setToggleState,
        cardData,
        setCardData
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
