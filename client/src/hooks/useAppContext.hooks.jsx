import { useContext } from "react";
import { AppContext } from "../context/AppContext.context.jsx";

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    console.log("No context found");
    return;
  }

  return context;
};
