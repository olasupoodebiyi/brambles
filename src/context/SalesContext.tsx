import React, { createContext, useReducer, ReactNode } from "react";
import { SalesState, SalesAction } from "../types";
import { DISPATCH_ACTIONS, LOCAL_STORAGE_KEYS } from "../constants";

const initialState: SalesState = {
  sales: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SALES) || "[]"),
};

export const SalesContext = createContext<{
  state: SalesState;
  dispatch: React.Dispatch<SalesAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const salesReducer = (state: SalesState, action: SalesAction): SalesState => {
  switch (action.type) {
    case DISPATCH_ACTIONS.ADD_SALE: {
      const updatedSales = [...state.sales, action.payload];
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.SALES,
        JSON.stringify(updatedSales)
      );
      return { sales: updatedSales };
    }
    default:
      return state;
  }
};

export const SalesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(salesReducer, initialState);

  return (
    <SalesContext.Provider value={{ state, dispatch }}>
      {children}
    </SalesContext.Provider>
  );
};
