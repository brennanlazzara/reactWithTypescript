import React from "react";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface NavLinkProps extends ChakraLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, ...props }) => {
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      color="white"
      textDecoration="none"
      fontSize="18px"
      transition="color 0.3s"
      _hover={{ color: "#333", backgroundColor: "#61dafb" }}
      p={2}
      borderRadius="md"
      {...props}
    >
      {children}
    </ChakraLink>
  );
};

export default NavLink;
