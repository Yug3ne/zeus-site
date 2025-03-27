import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <main className="">
      {/* navigation bar */}
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
