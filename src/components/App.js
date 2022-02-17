import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../authContext/AuthContext";
import "../styles/index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PublicOutlet />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="quiz" element={<Quiz />} />
              <Route path="result" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
