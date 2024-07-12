import React from "react";
import { Input } from "@chakra-ui/react";

interface InputNameProps {
  style?: React.CSSProperties;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputName: React.FC<InputNameProps> = ({ style, name, handleChange }) => {
  return (
    <Input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={handleChange}
      style={style}
    />
  );
};

export default InputName;
