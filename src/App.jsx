import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./pages/CreateAccount";
import SuccessLogin from "./pages/SuccessLogin";
import WelcomeScreen from "./pages/WelcomeScreen";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/successful-login" element={<SuccessLogin />} />
      </Routes>
    </div>
  );
}

export default App;
