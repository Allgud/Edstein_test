import { ReactNode } from "react";

export type SelectProps = {
  open: boolean;
  openHandler: (arg1: boolean) => void;
};

export type SelectedItemProps = {
  text: string;
  onRemoveClick: (arg1: string) => void;
};

export type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (arg1: string) => void;
  value: string;
  multiple: boolean;
};

export type ToggleSwitchProps = {
  label: string;
  id: string;
  value: string;
  checked: boolean;
  onChange: (arg1: string) => void;
};

export type SearchInputProps = {
  searchValue: string;
  handleChange: (arg1: string) => void;
};

export type DropdownListProps = {
  flagsVisible: boolean;
  multiple: boolean;
};

export type ProviderProps = {
  children: ReactNode;
};

export interface IOption {
  id?: number;
  title: string;
  value: string;
  checked: boolean;
  flag_icon: string;
  multiple: boolean;
}

export interface IContext {
  options: IOption[];
  renderOptions: IOption[];
  searchValue: string;
  handleChange: (arg1: string) => void;
  handleRemove: (arg1: string) => void;
  handleSearch: (arg1: string) => void;
  clearSearch: () => void;
}
