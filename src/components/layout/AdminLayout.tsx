import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-50">
        <Outlet /> {/* Nested admin routes */}
      </main>
    </div>
  );
};

export default AdminLayout;
