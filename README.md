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

