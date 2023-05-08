import { useState,useEffect } from "react";
import Form from "./components/Form";
import ListCost from "./components/ListCost";
import Question from "./components/Question";
import BudgetControl from "./components/BudgetControl";

function App() {
  // set state

  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [costs, setCosts] = useState([]);
  const [cost, setCost] = useState({});
  const [createCost, setCreateCost] = useState(false);

  //set useEffect

  useEffect(() => {
    if (createCost) {
      //add new cost
      setCosts([...costs,cost]);

      // rest the budget
      const restBudget = rest - cost.quantity;
      setRest(restBudget);
    }
    setCreateCost(false);
    
  }, [cost,createCost,costs,rest]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRest={setRest}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form 
                  setCost = {setCost}
                  setCreateCost = {setCreateCost}
                />
              </div>
              <div className="one-half column">
                <ListCost 
                  costs = {costs}
                />
                <BudgetControl
                  budget = {budget}
                  rest = {rest}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
