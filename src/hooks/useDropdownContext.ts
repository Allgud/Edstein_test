import { useContext } from "react";
import { DropdownContext } from "../context/DropdownProvider";

export const useDropdownContext = () => {
  return useContext(DropdownContext)
}