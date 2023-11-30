"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type HomeContextProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};
const HomeContext = createContext<HomeContextProps>({
  searchValue: "",
  setSearchValue: () => {},
});

const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <HomeContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeProvider, HomeContext };
