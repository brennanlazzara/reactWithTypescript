# React with Typescript

## Overview

Welcome to the Modern React and Redux Course Project! This project demonstrates a modern React application integrated with Redux and TypeScript, utilizing Chakra UI for a sleek and responsive user interface. The application includes several interactive components, showcasing the use of React hooks, API calls, and state management.

## Features

- **TypeScript**: Ensuring type safety and a better development experience.
- **Chakra UI**: Providing a consistent and responsive design system.
- **React Router**: Enabling navigation between different components.
- **Axios**: Making HTTP requests to fetch data from external APIs.
- **Functional Components**: Using React hooks for state and effect management.

## Screenshots

![Home Screen](./assets/screenshots/home.png)
![Voice Assistants](./assets/screenshots/voice-assistants.png)
![GitHub Users](./assets/screenshots/github-users.png)

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. **Clone the repository**:

   ```bash
   git https://github.com/brennanlazzara/reactWithTypescript.git
   cd jsx

npm install
# or
yarn install

npm start
# or
yarn start

npm run build
# or
yarn build


### Project Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── alexa.png
│   │   ├── cortana.png
│   │   └── siri.png
│   └── screenshots/
│       ├── home.png
│       ├── voice-assistants.png
│       └── github-users.png
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── style.css
│   ├── Inputs/
│   │   ├── InputAge.tsx
│   │   └── InputName.tsx
│   └── ProfileCard/
│       ├── ProfileCard.tsx
│       └── style.css
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── style.css
│   ├── NameAgeCounter/
│   │   ├── NameAgeCounter.tsx
│   │   └── style.css
│   └── VoiceAssistant/
│       ├── VoiceAssistant.tsx
│       └── style.css
├── App.tsx
├── index.tsx
├── custom.d.ts
└── ... other config files
```

## Key Components

### NameAgeCounter.tsx
Displays multiple react feature and CRUD operators

```
import React, { useEffect, useState } from "react";
import "./style.css";
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
    <div className="App-header">
      <h1 className="current-time">
        The current time is:
        <br />
        {currentDateTime}
      </h1>
      <div className="input-container">
        <InputName name={name} handleChange={handleChangeName} />
        <InputAge age={age} handleChange={handleChangeAge} />
      </div>
      <h2>
        My name is "{name}" and I am "{age}" years old.
      </h2>
      <button className="input" onClick={submitForm}>
        Submit
      </button>
      <button className="input reset-button" onClick={resetInputs}>
        Reset Inputs
      </button>
      {history.length > 0 && (
        <button className="input" onClick={resetHistory}>
          Clear History of Submissions
        </button>
      )}
      <h3>History of form submissions:</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            {editIndex === index ? (
              <div>
                <input
                  className="input"
                  type="text"
                  value={editName}
                  onChange={handleEditNameChange}
                />
                <input
                  className="input"
                  type="number"
                  value={editAge}
                  onChange={handleEditAgeChange}
                />
                <button className="input" onClick={saveEdit}>
                  Save
                </button>
                <button className="input" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <div style={{ flex: 1 }}>
                <strong>Name:</strong> {entry.name}, <strong>Age:</strong>{" "}
                {entry.age}, <strong>Submitted at:</strong> {entry.dateTime}
                <button
                  className="input"
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    borderRadius: "4px",
                  }}
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameAgeCounter;
```

### VoiceAssistant.tsx

```
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
      url: "https://developer.amazon.com/en-US/alexa"
    },
    {
      id: 2,
      name: "Cortana",
      socialHandle: "@cortana12",
      description: "Personal Assistant by Microsoft.",
      imageUrl: cortanaImg,
      url: "https://learn.microsoft.com/en-us/cortana/"
    },
    {
      id: 3,
      name: "Siri",
      socialHandle: "siri44",
      description: "I don't get a lot of updates anymore",
      imageUrl: siriImg,
      url: "https://developer.apple.com/siri/"
    }
  ];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const userNames = ["klintT", "BrennanLazzara"];
        const requests = userNames.map(username => axios.get(`https://api.github.com/users/${username}`));
        const responses = await Promise.all(requests);
        const profileData = responses.map(response => ({
          id: response.data.id,
          name: response.data.login,
          socialHandle: `@${response.data.login}`,
          description: response.data.bio,
          imageUrl: response.data.avatar_url,
          url: response.data.html_url
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

  if (loading) return <Box className="voice-assistant-header"><Heading>Loading...</Heading></Box>;

  return (
    <>
      <Box className="voice-assistant-header"><Heading>Voice Assistants</Heading></Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} className="voice-assistant-container">
        {voiceAssistants.map(profile => <ProfileCard key={profile.id} profile={profile} onProfileClick={handleProfileClick} />)}
      </SimpleGrid>
      <Box className="voice-assistant-header"><Heading>GitHub Users</Heading></Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} className="voice-assistant-container">
        {profiles.map(profile => <ProfileCard key={profile.id} profile={profile} onProfileClick={handleProfileClick} />)}
      </SimpleGrid>
    </>
  );
};

export default VoiceAssistant;
```

## License
This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Axios](https://axios-http.com/)
