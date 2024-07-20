import React, { useState } from "react";
import { Box, Input, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";

const SearchPics: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [pics, setPics] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPics = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: inputValue,
            client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
          },
        }
      );
      setPics(response.data.results);
    } catch (err) {
      setError("Failed to fetch images. Please try again.");
      console.error("Error fetching images:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchPics();
    }
  };

  return (
    <Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
        bg="gray.800"
        padding={4}
      >
        <Input
          type="text"
          color="white"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search Pics and Press Enter"
          textAlign="center"
          mb={4}
          width="300px"
        />
        {isLoading && <Text color="white">Loading...</Text>}
        {error && <Text color="red.500">{error}</Text>}
        <SimpleGrid columns={[1, 2 ]} spacing={4}>
          {pics.map((pic) => (
            <Box key={pic.id}>
              <Image
                src={pic.urls.small}
                alt={pic.alt_description}
                borderRadius="md"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default SearchPics;
