import React from "react";
import { Box } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.800"
      color="white"
      textAlign="center"
      fontSize="3xl"
    >
      Witness The Power Of React
    </Box>
  );
};

export default Home;
