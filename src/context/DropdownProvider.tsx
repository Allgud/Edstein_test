import * as React from "react";
import { useState, useEffect, createContext } from "react";
import { IOption, IContext, ProviderProps } from "../types";
import { LANGUAGES_OPTIONS } from "../constants";

export const DropdownContext = createContext<IContext>({} as IContext);

const DropdownProvider = ({ children }: ProviderProps) => {
  const [options, setOptions] = useState<IOption[]>(LANGUAGES_OPTIONS);
  const [renderOptions, setRenderOptions] = useState<IOption[]>(options);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setRenderOptions(options);
  }, [options]);

  const handleChange = (val: string, bool: boolean) => {
    if (searchValue) {
      setSearchValue("");
      setRenderOptions(options);
    }

    if (!bool) {
      const newOptions = options.map((option) =>
        option.value === val
          ? { ...option, checked: !option.checked }
          : { ...option, checked: false },
      );
      setOptions(newOptions);
      return;
    } else {
      const newOptions = options.map((option) =>
        option.value === val ? { ...option, checked: !option.checked } : option,
      );
      setOptions(newOptions);
      return;
    }
  };

  const handleRemove = (val: string) => {
    const newOptions = options.map((option) =>
      option.title === val ? { ...option, checked: false } : option,
    );
    setOptions(newOptions);
  };

  const handleSearch = (val: string) => {
    setSearchValue(val.trim());
    if (val === "") {
      setRenderOptions(options);
      return;
    }
    const regex = new RegExp(val, "gi");
    const filteredOptions = options.filter((option) =>
      option.title.match(regex),
    );
    setRenderOptions(filteredOptions);
  };

  const value = {
    options,
    renderOptions,
    handleChange,
    handleRemove,
    searchValue,
    handleSearch,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
