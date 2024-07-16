import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import InputName from "../../components/Inputs/InputName";
import InputAge from "../../components/Inputs/InputAge";

const NameAgeCounter: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [history, setHistory] = useState<
    { name: string; age: string; dateTime: string }[]
  >([]);
  const [currentDateTime, setCurrentDateTime] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");
  const [editAge, setEditAge] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(
        new Date().toLocaleTimeString() + " " + new Date().toDateString()
      );
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const submitForm = () => {
    setHistory([...history, { name, age, dateTime: currentDateTime }]);
    resetInputs();
  };

  const resetInputs = () => {
    setName("");
    setAge("");
  };

  const resetHistory = () => {
    setHistory([]);
  };

  const startEditing = (index: number) => {
    setEditIndex(index);
    setEditName(history[index].name);
    setEditAge(history[index].age);
  };

  const handleEditNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
  };

  const handleEditAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditAge(event.target.value);
  };

  const saveEdit = () => {
    if (editIndex !== null) {
      const updatedHistory = [...history];
      updatedHistory[editIndex] = {
        ...updatedHistory[editIndex],
        name: editName,
        age: editAge,
      };
      setHistory(updatedHistory);
      cancelEdit();
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditName("");
    setEditAge("");
  };

  return (
    <Box
      bg="#171717"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize="calc(10px + 2vmin)"
      color="white"
      p="20px"
    >
      <Heading as="h1" size="xl" textAlign="center" mb="20px">
        The current time is:
        <br />
        {currentDateTime}
      </Heading>
      <Flex flexDirection="column" alignItems="center" mb="20px">
        <InputName name={name} handleChange={handleChangeName} />
        <InputAge age={age} handleChange={handleChangeAge} />
      </Flex>
      <Text fontSize="2xl" mb="20px">
        My name is "{name}" and I am "{age}" years old.
      </Text>
      <Button className="input" onClick={submitForm} mb="10px">
        Submit
      </Button>
      <Button className="input reset-button" onClick={resetInputs} mb="10px">
        Reset Inputs
      </Button>
      {history.length > 0 && (
        <Button className="input" onClick={resetHistory} mb="20px">
          Clear History of Submissions
        </Button>
      )}
      <Heading as="h3" size="lg" mb="20px">
        History of form submissions:
      </Heading>
      <UnorderedList listStyleType="none" p="0">
        {history.map((entry, index) => (
          <ListItem
            key={index}
            display="flex"
            alignItems="center"
            p="10px"
            mb="5px"
            borderRadius="4px"
            bg="#20232a"
            color="#61dafb"
          >
            {editIndex === index ? (
              <Flex>
                <Input
                  className="input"
                  type="text"
                  value={editName}
                  onChange={handleEditNameChange}
                  mr="10px"
                />
                <Input
                  className="input"
                  type="number"
                  value={editAge}
                  onChange={handleEditAgeChange}
                  mr="10px"
                />
                <Button className="input" onClick={saveEdit} mr="10px">
                  Save
                </Button>
                <Button className="input" onClick={cancelEdit}>
                  Cancel
                </Button>
              </Flex>
            ) : (
              <Flex flex="1" alignItems="center">
                <Text flex="1">
                  <strong>Name:</strong> {entry.name}, <strong>Age:</strong>{" "}
                  {entry.age}, <strong>Submitted at:</strong> {entry.dateTime}
                </Text>
                <Button
                  className="input"
                  ml="10px"
                  p="5px 10px"
                  borderRadius="4px"
                  onClick={() => startEditing(index)}
                >
                  Edit
                </Button>
              </Flex>
            )}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default NameAgeCounter;
