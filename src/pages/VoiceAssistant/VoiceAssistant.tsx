import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import alexaImg from "../../assets/images/alexa.png";
import cortanaImg from "../../assets/images/cortana.png";
import siriImg from "../../assets/images/siri.png";

interface Profile {
  id: number;
  name: string;
  socialHandle: string;
  description: string;
  imageUrl: string;
  url: string;
}

const VoiceAssistant: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const voiceAssistants: Profile[] = [
    {
      id: 1,
      name: "Alexa",
      socialHandle: "@alexa99",
      description: "I'll help you buy stuff.",
      imageUrl: alexaImg,
      url: "https://developer.amazon.com/en-US/alexa",
    },
    {
      id: 2,
      name: "Cortana",
      socialHandle: "@cortana12",
      description: "Personal Assistant by Microsoft.",
      imageUrl: cortanaImg,
      url: "https://learn.microsoft.com/en-us/cortana/",
    },
    {
      id: 3,
      name: "Siri",
      socialHandle: "siri44",
      description: "I don't get a lot of updates anymore",
      imageUrl: siriImg,
      url: "https://developer.apple.com/siri/",
    },
  ];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const userNames = ["klintT", "BrennanLazzara"];
        const requests = userNames.map((username) =>
          axios.get(`https://api.github.com/users/${username}`)
        );
        const responses = await Promise.all(requests);
        const profileData = responses.map((response) => ({
          id: response.data.id,
          name: response.data.login,
          socialHandle: `@${response.data.login}`,
          description: response.data.bio,
          imageUrl: response.data.avatar_url,
          url: response.data.html_url,
        }));
        setProfiles(profileData);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleProfileClick = (profile: Profile) => {
    window.open(profile.url, "_blank");
  };

  if (loading) {
    return (
      <Box className="voice-assistant-header">
        <Heading>Loading...</Heading>
      </Box>
    );
  }

  return (
    <>
      <Box className="voice-assistant-header">
        <Heading>Voice Assistants</Heading>
      </Box>
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={10}
        className="voice-assistant-container"
      >
        {voiceAssistants.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onProfileClick={handleProfileClick}
          />
        ))}
      </SimpleGrid>
      <Box className="voice-assistant-header">
        <Heading>GitHub Users</Heading>
      </Box>
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={10}
        className="voice-assistant-container"
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onProfileClick={handleProfileClick}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default VoiceAssistant;
