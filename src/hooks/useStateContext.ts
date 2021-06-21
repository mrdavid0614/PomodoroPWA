import { useContext } from "react";
import { StateContext } from "../context/state";

const useStateContext = () => useContext(StateContext);

export default useStateContext;
