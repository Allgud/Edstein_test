import * as React from "react";
import { useState, useEffect, createContext, SyntheticEvent } from "react";
import { IOption, IContext, ProviderProps } from "../types";
import { LANGUAGES_OPTIONS } from "../constants";

export const DropdownContext = createContext<IContext>({} as IContext);

const DropdownProvider = ({ children }: ProviderProps) => {
  const [options, setOptions] = useState<IOption[]>(LANGUAGES_OPTIONS);
  const [renderOptions, setRenderOptions] = useState<IOption[]>(options);
  const [selectedOptions, setSelectedOptions] = useState<IOption[]>([])
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setRenderOptions(options);

    const selected = options.filter(option => Boolean(option.checked))
    setSelectedOptions(selected)
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

  const handleRemove = (evt: SyntheticEvent, val: string) => {
    evt.stopPropagation()
    const newOptions = options.map((option) =>
      option.title === val ? { ...option, checked: false } : option,
    );
    setOptions(newOptions);
  };

  const handleSearch = (val: string) => {
    setSearchValue(val.trim());
    if (!val) {
      setRenderOptions(options);
      return;
    }
    const regex = new RegExp(val, "gi");
    const filteredOptions = options.filter((option) =>
      option.title.match(regex),
    );
    setRenderOptions(filteredOptions);
  };

  const clearSelectedList = () => {
    setSelectedOptions([])
    setOptions(LANGUAGES_OPTIONS)
  }

  const value = {
    options,
    renderOptions,
    handleChange,
    handleRemove,
    searchValue,
    handleSearch,
    selectedOptions,
    clearSelectedList
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
