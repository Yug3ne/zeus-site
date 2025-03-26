import { Route, Routes } from "react-router";
import HomePage from "./pages/homePage";
import ServicePage from "./pages/servicePage";
import ContactPage from "./pages/contactPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
};

export default App;
