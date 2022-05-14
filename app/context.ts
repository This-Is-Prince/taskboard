import { createContext, useContext } from "react";
import { ContextProps } from "../types/types";

const Context = createContext<ContextProps | null>(null);

const useGlobalContext = () => {
  return useContext(Context);
};

export { Context };
export default useGlobalContext;
