import "./App.css";
import Post from "./post";
function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          Myblog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
         <Post />
         <Post />
         <Post />

    </main>
  );
}

export default App;
