import { Route, Routes } from "react-router";
import HomePage from "./pages/homePage";
import ServicePage from "./pages/servicePage";
import ContactPage from "./pages/contactPage";
import MainLayout from "./components/layout/mainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
