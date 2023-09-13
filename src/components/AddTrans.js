import { useState } from "react"; 
import {  useDispatch } from "react-redux"; 
import { addTrans, delTrans, addTotal, minusTotal } from "../app/slice"; 

export default function AddTrans() { // Declaring a functional React component named 'AddTrans'.
  const dispatch = useDispatch(); // Creating a 'dispatch' function to send actions to the Redux store.

  const [text, setText] = useState(""); // Initializing a state variable 'text' with an empty string and a function 'setText' to update it.
  const [amount, setAmount] = useState(0); 

  const handleSubmit = (e) => { // Defining a function 'handleSubmit' to handle form submission.
    e.preventDefault(); // Preventing the default form submission behavior.
   
      const newtrans = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };
  
      // Checking if the 'amount' is greater than 0 and dispatching an 'addTotal' action with the transaction amount.
      if (amount > 0) {
        dispatch(addTotal(newtrans.amount));
      }
  
  
      if (amount < 0) {
        dispatch(minusTotal(newtrans.amount));
      }
      dispatch(addTrans(newtrans)); // Dispatching an 'addTrans' action with the new transaction object.
  
    
     }
    
    // Creating a new transaction object with a random ID, 'text', and 'amount'.
    
  // Returning JSX (React elements) for rendering the component.
  return (
    <>
      <h3 className="font-semibold text-2xl mt-10">Add new transaction</h3> {/* Heading for the form. */}
      <hr className="mt-4"/>
      <form onSubmit={handleSubmit}>
        <span class="block mt-5 text-xl font-medium text-slate-700">
          Text
        </span> {/* Label for the 'text' input field. */}

        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-[100%]  border border-slate-200 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Enter text here.."
          type="text"
          name="text"
          required
          onChange={(e) => {
            setText(e.target.value); // Updating the 'text' state with the input value onChange.
          }}
        />

        <span class="block text-xl font-medium text-slate-700">
          Amount <br />
          (negative - expense, positive - income)
        </span> 

        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-[100%]  border border-slate-200 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Enter amount here.."
          type="number"
          name="number"
          required
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
         <button
        className="w-[100%] mt-6 px-3 py-3 w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        
      >
        Submit
      </button> 
      </form>

     
    </>
  );
}
