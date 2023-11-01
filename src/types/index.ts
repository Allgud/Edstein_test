import { ReactNode } from "react"

export type SelectProps = {
  open: boolean,
  openHandler: (arg1: boolean) => void
}

export type SelectedItemProps = {
  text: string,
  onRemoveClick: (arg1: string) => void
}

export type CheckboxProps = {
  id: string,
  checked: boolean,
  onChange: (arg1: string) => void,
  value: string
}

export type SearchInputProps = {
  searchValue: string,
  handleChange: (arg1: string) => void
}

export type ProviderProps = {
  children: ReactNode
}

export interface IOption {
  id?: number,
  title: string,
  value: string,
  checked: boolean,
  flag_icon: string
}

export interface IContext {
  options: IOption[],
  searchValue: string
  handleChange: (arg1: string) => void,
  handleRemove: (arg1: string) => void,
  handleSearch: (arg1: string) => void,
  clearSearch: () => void
}