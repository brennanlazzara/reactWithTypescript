import React from "react";
import { Box } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      fontSize="3em"
      color="#61dafb"
      textAlign="center"
      bg="#20232a"
      width="100%"
    >
      Witness The Power Of React
    </Box>
  );
};

export default Home;
