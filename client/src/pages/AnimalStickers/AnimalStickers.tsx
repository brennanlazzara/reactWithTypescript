import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Wrap,
  WrapItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import bird from "../../assets/images/bird.svg";
import cat from "../../assets/images/cat.svg";
import cow from "../../assets/images/cow.svg";
import dog from "../../assets/images/dog.svg";
import gator from "../../assets/images/gator.svg";
import horse from "../../assets/images/horse.svg";
import heart from "../../assets/images/heart.svg";

type Animal = {
  name: string;
  image: string;
  clicks: number;
};

const AnimalStickers: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [text, setText] = useState<string>("");

  const handleTextChange = () => {
    const text = "Nadda bruh";
    setText(text);
  };

  const initialAnimalImages: Animal[] = [
    { name: "Bird", image: bird, clicks: 0 },
    { name: "Cat", image: cat, clicks: 0 },
    { name: "Cow", image: cow, clicks: 0 },
    { name: "Dog", image: dog, clicks: 0 },
    { name: "Gator", image: gator, clicks: 0 },
    { name: "Horse", image: horse, clicks: 0 },
  ];

  const addAnimal = () => {
    if (animals.length < initialAnimalImages.length) {
      const newAnimal = initialAnimalImages[animals.length];
      setAnimals([...animals, newAnimal]);
    } else {
      console.log("All animals have been added!");
    }
  };

  const handleAnimalClick = (index: number) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal, i) =>
        i === index ? { ...animal, clicks: animal.clicks + 1 } : animal
      )
    );
  };

  const getHeartSize = (clicks: number) => {
    const baseSize = 10;
    const growth = Math.min(clicks * 2, 20); // Cap the growth at 20px
    return baseSize + growth;
  };

  return (
    <Box>
      <Text fontSize="xl" mb={4}>
        Animal Stickers
      </Text>
      <Button
        onClick={addAnimal}
        colorScheme="blue"
        mb={4}
        isDisabled={animals.length === initialAnimalImages.length}
      >
        Add Animal
      </Button>
      <Button onClick={handleTextChange}>Change The Text</Button>
      <Text color="white">Waddup bruh: {text}</Text>
      <Wrap>
        {animals.map((animal, index) => (
          <WrapItem key={index}>
            <Box position="relative" onClick={() => handleAnimalClick(index)}>
              <Image src={animal.image} alt={animal.name} boxSize="50px" />
              {animal.clicks > 0 && (
                <Flex
                  position="absolute"
                  bottom="2px"
                  right="2px"
                  alignItems="center"
                  justifyContent="center"
                  width={`${getHeartSize(animal.clicks)}px`}
                  height={`${getHeartSize(animal.clicks)}px`}
                  backgroundColor="white"
                  borderRadius="full"
                >
                  <Image src={heart} alt="Heart" width="100%" height="100%" />
                </Flex>
              )}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default AnimalStickers;
