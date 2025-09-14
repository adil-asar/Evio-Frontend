import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen '>
      <Outlet /> {/* Login/Signup pages */}
    </div>
  );
};

export default AuthLayout;
