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
      border="2px solid #61dafb"
      borderRadius="4px"
      padding="10px"
      margin="10px 0"
      fontSize="1em"
      width="200px"
      backgroundColor="#282c34"
      color="#61dafb"
      _hover={{ backgroundColor: "#61dafb", color: "#282c34" }}
      _focus={{ outline: "none", borderColor: "#21a1f1" }}
      _placeholder={{ fontSize: "0.8em", color: "#fff" }}
    />
  );
};

export default InputName;
