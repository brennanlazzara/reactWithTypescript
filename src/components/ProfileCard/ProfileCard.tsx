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
      className="profile-card"
      onClick={() => onProfileClick(profile)}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      _hover={{ cursor: "pointer", boxShadow: "lg" }}
    >
      <Image
        src={imageUrl}
        alt={`${name}'s profile`}
        className="profile-image"
      />
      <Heading size="md">{name}</Heading>
      <Text>Social Handle: {socialHandle}</Text>
      <Text>{description}</Text>
    </Box>
  );
};

export default ProfileCard;
