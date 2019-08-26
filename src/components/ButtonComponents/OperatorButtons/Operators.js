import React from "react";
import OperatorButton from './OperatorButton.js'
import { operators } from '../../../data.js'

//importing all the necessary components up here.

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  // const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className = 'operator-container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map(operator => <OperatorButton operator = {operator} 
                                                 key={operator.char} 
                                                 addOperator = {props.addOperator}/>)}

    </div>
  );
};

export default Operators