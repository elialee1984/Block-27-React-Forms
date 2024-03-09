import { useState } from "react";
import "./App.css";

import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Authenticate />
      <SignUpForm />
    </div>
  );
};

export default App;
