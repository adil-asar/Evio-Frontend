import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from '../../components/common/Loading';
import AdminLayout from '../../components/layout/AdminLayout';
import AuthLayout from '../../components/layout/AuthLayout';
// Layouts
import MainLayout from '../../components/layout/MainLayout';

// Pages
const Home = lazy(() => import('../../pages/client/Home'));
const About = lazy(() => import('../../pages/client/About'));
const Blogs = lazy(() => import('../../pages/client/Blogs'));
const Contact = lazy(() => import('../../pages/client/Contact'));

const Dashboard = lazy(() => import('../../pages/admin/Dashboard'));
const BlogsModule = lazy(() => import('../../pages/admin/BlogsModule'));

const Login = lazy(() => import('../../pages/auth/Login'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        {/* Admin routes */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='blogs' element={<BlogsModule />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Catch-all for 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
