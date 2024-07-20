import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import CrystalBall from "./pages/CrystalBall/CrystalBall";
import NameAgeCounter from "./pages/NameAgeCounter/NameAgeCounter";
import VoiceAssistant from "./pages/VoiceAssistant/VoiceAssistant";
import AnimalStickers from "./pages/AnimalStickers/AnimalStickers";
import SearchPics from "./pages/SearchPics/SearchPics";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Box bg="#171717" minHeight="100vh">
        <Routes>
          <Route path='/' element={<CrystalBall />} />
          <Route path='/nameAgeCounter' element={<NameAgeCounter />} />
          <Route path='/voiceAssistant' element={<VoiceAssistant />} />
          <Route path='/animalStickers' element={<AnimalStickers />} />
          <Route path='/SearchPics' element={<SearchPics />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
