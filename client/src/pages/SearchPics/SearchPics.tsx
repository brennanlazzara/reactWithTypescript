import { useState } from "react";
import { Box, Input, Flex } from "@chakra-ui/react";

// import axios from 'axios';

const SearchPics: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  // const [pics, setPics] = useState([]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed. Input value:", inputValue);
      // You can add your custom logic here
    }
  };
  return (
    <Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Input
          type="text"
          color={"white"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search Pics and Press Enter"
          textAlign={"center"}
        />
      </Flex>
    </Box>
  );
};

export default SearchPics;
