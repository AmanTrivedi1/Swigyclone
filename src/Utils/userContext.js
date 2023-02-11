import { createContext } from "react";

const useContext = createContext({
  user: {
    name: "Aman Trivedi",
    email: "amantrivedi598@gmaio.com",
  },
});

export default useContext;
