import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); // Initialize userId with null or a default value
  const [amount, setAmount] = useState(0.0);
  const [typeofpayment, setPaymentType] = useState(1);
  const [categoryId, setCategoryId] = useState(null);
  const [subcategoryId, setSubcategoryId] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        userId,
        setUserId,
        amount,
        setAmount,
        typeofpayment,
        setPaymentType,
        categoryId,
        setCategoryId,
        subcategoryId,
        setSubcategoryId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
