import { useState } from "react";
import "./App.css";

import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </div>
  );
};

export default App;
