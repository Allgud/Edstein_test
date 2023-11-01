import React from "react";
import { useState, createContext } from "react";
import { IOption, IContext, ProviderProps } from "../types";
import { LANGUAGES_OPTIONS } from "../constants";

export const DropdownContext = createContext<IContext>({} as IContext)

const DropdownProvider = ({ children }: ProviderProps) => {
  const [options, setOptions] = useState<IOption[]>(LANGUAGES_OPTIONS)
  const [searchValue, setSearchValue] = useState<string>('')

  const clearSearch = () => {
    setSearchValue('')
  }

  const handleChange = (val: string) => {
    if (searchValue) {
      setSearchValue('')
    }
    const newOptions = options.map((option) => option.value === val ? { ...option, checked: !option.checked } : option)
    setOptions(newOptions)
  }

  const handleRemove = (val: string) => {
    const newOptions = options.map(option => option.title === val ? { ...option, checked: false } : option)
    setOptions(newOptions)
  }

  const handleSearch = (val: string) => {
    setSearchValue(val.trim())
    const regex = new RegExp(val, 'gi')
    const filteredOptions = LANGUAGES_OPTIONS.filter(option => option.title.match(regex))
    setOptions(filteredOptions)
  }

  const value = { options, handleChange, handleRemove, searchValue, handleSearch, clearSearch }

  return (<DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>)
}

export default DropdownProvider