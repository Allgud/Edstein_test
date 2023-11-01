import React from "react";
import { useState, createContext } from "react";
import { IOption, IContext, ProviderProps } from "../types";
import { LANGUAGES_OPTIONS } from "../constants";

export const DropdownContext = createContext<IContext>({} as IContext)

const DropdownProvider = ({ children }: ProviderProps) => {
  const [options, setOptions] = useState<IOption[]>(LANGUAGES_OPTIONS)

  const handleChange = (val: string) => {
    const newOptions = options.map((option) => option.value === val ? { ...option, checked: !option.checked } : option)
    setOptions(newOptions)
  }

  const handleRemove = (val: string) => {
    const newOptions = options.map(option => option.title === val ? { ...option, checked: false } : option)
    setOptions(newOptions)
  }

  const value = { options, handleChange, handleRemove }

  return (<DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>)
}

export default DropdownProvider