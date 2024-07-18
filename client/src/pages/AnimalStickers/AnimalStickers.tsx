import React, { useState } from "react";
import { Box, Button, Text, Wrap, WrapItem, Image } from "@chakra-ui/react";
import bird from '../../../assets/images/bird.svg'
import cat from '../../../assets/images/cat.svg'
import cow from '../../../assets/images/cow.svg'
import dog from '../../../assets/images/dog.svg'
import gator from '../../../assets/images/gator.svg'
import horse from '../../../assets/images/horse.svg'

// Define a type for our animal objects
type Animal = {
  name: string;
  image: string;
};

const AnimalStickers: React.FC = () => {
  const animalImages: Animal[] = [
    { name: "Bird", image: bird },
    { name: "Cat", image: cat },
    { name: "Cow", image: cow },
    { name: "Dog", image: dog },
    { name: "Gator", image: gator },
    { name: "Horse", image: horse },
  ];

  const [animals, setAnimals] = useState<Animal[]>([]);

  const addAnimal = () => {
    if (animals.length < animalImages.length) {
      const newAnimal = animalImages[animals.length];
      const newAnimals = [...animals, newAnimal];
      setAnimals(newAnimals);
      console.log(newAnimals);
    } else {
      console.log("All animals have been added!");
    }
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
        isDisabled={animals.length === animalImages.length}
      >
        Add Animal
      </Button>
      <Wrap>
        {animals.map((animal, index) => (
          <WrapItem key={index}>
            <Image src={animal.image} alt={animal.name} boxSize="50px" />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default AnimalStickers;