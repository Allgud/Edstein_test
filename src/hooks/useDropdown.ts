import { useState } from "react";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = (bool: boolean) => {
    setIsOpen(bool)
  }

  return {
    isOpen, 
    handleOpen
  }
}