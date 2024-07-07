import "./App.css";
import HomePage from "./page/homepage/HomePage";
import AboutPage from "./page/aboutpage/AboutPage";
import ContactPage from "./page/contactpage/ContactPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/about" element={<AboutPage />} />
     <Route path="/contact" element={<ContactPage />} />
   </Routes>
 </BrowserRouter>
  );
}

export default App;
