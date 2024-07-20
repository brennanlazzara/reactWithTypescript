import React from "react";
import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import NavLink from "./NavLink";

export const Header: React.FC = () => {
  return (
    <Box bg="#333" p="10px 20px">
      <Flex justifyContent="center" alignItems="center">
        <List display="flex" m={0} p={0} listStyleType="none">
          <ListItem mx="15px">
            <NavLink to="/">AI ChatBot</NavLink>
          </ListItem>
          <ListItem mx="15px">
            <NavLink to="/nameAgeCounter">Name Age Counter</NavLink>
          </ListItem>
          <ListItem mx="15px">
            <NavLink to="/voiceAssistant">Voice Assistant</NavLink>
          </ListItem>
          <ListItem mx="15px">
            <NavLink to="/animalStickers">Animal Stickers</NavLink>
          </ListItem>
          <ListItem mx="15px">
            <NavLink to="/searchPics">Search Pics</NavLink>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};
