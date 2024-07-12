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

export default InputAge;
