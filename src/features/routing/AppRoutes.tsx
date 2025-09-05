import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../../components/layout/MainLayout";
import AdminLayout from "../../components/layout/AdminLayout";
import AuthLayout from "../../components/layout/AuthLayout";

// Pages
import Home from "../../pages/client/Home";
import About from "../../pages/client/About";
import Blogs from "../../pages/client/Blogs";
import Contact from "../../pages/client/Contact";
import Dashboard from "../../pages/admin/Dashboard";
import BlogsModule from "../../pages/admin/BlogsModule";
import Login from "../../pages/auth/Login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="blogs" element={<BlogsModule />} />
      </Route>

      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
