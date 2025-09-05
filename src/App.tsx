import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./features/routing/AppRoutes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
