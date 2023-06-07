import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './Pages/HomePage';
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
