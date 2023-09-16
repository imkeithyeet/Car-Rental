import { MouseEventHandler } from "react"

// Button-related interfaces
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
  }
  
  // Search-related interfaces
  export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
  }
  
  // Car-related interfaces
  export interface CarProps {
    city_mpg: number;
    class: "string";
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: "string";
    fuel_type: "string";
    highway_mpg: number;
    make: "string";
    model: "string";
    transmission: "string";
    year: number;
  }
  
  // Filter-related interfaces
  export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
  }
  
  // Option-related interfaces
  export interface OptionProps {
    title: string;
    value: string[];
  }
  
  // Custom Filter-related interfaces
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }
  
  // Show More-related interfaces
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  