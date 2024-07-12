import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <Box bg="gray.700" p={4}>
      <Flex justifyContent="space-around">
        <Link as={RouterLink} to="/" color="white">
          Home
        </Link>
        <Link as={RouterLink} to="/nameAgeCounter" color="white">
          Name Age Counter
        </Link>
        <Link as={RouterLink} to="/voiceAssistant" color="white">
          Voice Assistant
        </Link>
      </Flex>
    </Box>
  );
};
