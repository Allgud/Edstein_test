import { useState } from "react";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMultiple, setIsMultiple] = useState<boolean>(true);
  const [withFlags, setWithFlags] = useState<boolean>(true);

  const handleOpen = (bool: boolean) => {
    setIsOpen(bool);
  };

  const handleSwitch = (value: string) => {
    if (value === "multiple") {
      setIsMultiple(!isMultiple);
      return;
    }

    if (value === "flags") {
      setWithFlags(!withFlags);
    }
  };

  return {
    isOpen,
    handleOpen,
    handleSwitch,
    isMultiple,
    withFlags,
  };
};
