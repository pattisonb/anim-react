import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HomePage } from './Pages/HomePage';
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
