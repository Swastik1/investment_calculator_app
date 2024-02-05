import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 6,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter the duration greater than zero!</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
