import { Outlet } from "react-router-dom";

import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const MainLayout: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Outlet /> {/* Nested routes will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
