import { useState } from 'react';
import InputField from './components/InputField.jsx';
import Results from './components/Results.jsx';

const MOCKED_DATA = {
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12
};

function App() {
  const [enteredData, setEnteredData] = useState({...MOCKED_DATA});

  function handleInputChange(field, newValue) {
    setEnteredData(prevData => {
      return {
        ...prevData,
        [field]: newValue
      };
    });
  }

  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <InputField label="Initial Investment" name="initialInvestment" type="number" initialValue={enteredData.initialInvestment} onInputChange={handleInputChange}/>
          <InputField label="Annual Investment" name="annualInvestment" type="number"  initialValue={enteredData.annualInvestment} onInputChange={handleInputChange}/>
        </div>
        <div className="input-group">
          <InputField label="Expected Return" name="expectedReturn" type="number"  initialValue={enteredData.expectedReturn} onInputChange={handleInputChange}/>
          <InputField label="Duration" name="duration" type="number"  initialValue={enteredData.duration} onInputChange={handleInputChange}/>
        </div>
      </div>
      <div id="result" className="center">
        <Results data={enteredData}/>
      </div>
    </main>
  )
}

export default App
