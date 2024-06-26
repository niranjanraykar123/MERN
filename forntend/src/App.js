import "./App.css";
import Post from "./post";
import Header from "./header";
import {Route,Routes} from "react-router-dom"
import Layout from "./layout";
import IndexPage from "./Pages/indexpage";
import LoginPage from "./Pages/loginpage";
import RegisterPage from "./Pages/registerpage";
function App() {
  return (
    <Routes>
              <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
              </Route>

  
    </Routes>
    
  );
}
export default App;
