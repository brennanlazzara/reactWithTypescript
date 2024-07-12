import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

interface Profile {
  id: number;
  name: string;
  socialHandle: string;
  description: string;
  imageUrl: string;
  url: string;
}

interface ProfileCardProps {
  profile: Profile;
  onProfileClick: (profile: Profile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onProfileClick,
}) => {
  const { name, socialHandle, description, imageUrl } = profile;

  return (
    <Box
      onClick={() => onProfileClick(profile)}
      border="2px solid #ccc"
      borderRadius="8px"
      p="16px"
      m="10px"
      width="250px"
      textAlign="center"
      boxShadow="2px 2px 12px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
    >
      <Image
        src={imageUrl}
        alt={`${name}'s profile`}
        width="100%"
        height="auto"
        borderRadius="8px"
      />
      <Heading size="md" mt="4">
        {name}
      </Heading>
      <Text mt="2">Social Handle: {socialHandle}</Text>
      <Text mt="2">{description}</Text>
    </Box>
  );
};

export default ProfileCard;
