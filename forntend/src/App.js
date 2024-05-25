import "./App.css";
import Post from "./post";
import Header from "./header";
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route index element={
        <main>
        <Header />
         <Post />
         <Post />
         <Post />

    </main>
      }>

      </Route>

      <Route path={'/login'} element={
        <div>login</div>
      }></Route>
      <Route path={'/register'} element={
        <div>Register</div>
      }></Route>
    </Routes>
    
  );
}
export default App;
