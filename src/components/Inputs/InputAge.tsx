import React from "react";
import { Input } from "@chakra-ui/react";

interface InputAgeProps {
  style?: React.CSSProperties;
  age: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAge: React.FC<InputAgeProps> = ({ style, age, handleChange }) => {
  return (
    <Input
      type="number"
      placeholder="Enter an age"
      value={age}
      onChange={handleChange}
      style={style}
    />
  );
};

export default InputAge;
