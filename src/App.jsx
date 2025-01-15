import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "motion/react";
import Scroll from "./scroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Scroll />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          transition: {
            duration: 0.3,
          },
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
          },
        }}
        className="logos"
      >
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </motion.div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>v
    </>
  );
}

export default App;
