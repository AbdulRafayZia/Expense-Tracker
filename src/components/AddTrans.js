import { useState } from "react"; 
import {  useDispatch } from "react-redux"; 
import { addTrans, delTrans, addTotal, minusTotal } from "../app/slice"; 

export default function AddTrans() { // Declaring a functional React component named 'AddTrans'.
  const dispatch = useDispatch(); // Creating a 'dispatch' function to send actions to the Redux store.

  const [text, setText] = useState(""); // Initializing a state variable 'text' with an empty string and a function 'setText' to update it.
  const [amount, setAmount] = useState(0); // Initializing a state variable 'amount' with the value 0 and a function 'setAmount' to update it.

  const handleSubmit = (e) => { // Defining a function 'handleSubmit' to handle form submission.
    e.preventDefault(); // Preventing the default form submission behavior.

    // Creating a new transaction object with a random ID, 'text', and 'amount'.
    const newtrans = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    // Checking if the 'amount' is greater than 0 and dispatching an 'addTotal' action with the transaction amount.
    if (amount > 0) {
      dispatch(addTotal(newtrans.amount));
    }

    // Checking if the 'amount' is less than 0 and dispatching a 'minusTotal' action with the transaction amount.
    if (amount < 0) {
      dispatch(minusTotal(newtrans.amount));
    }
    dispatch(addTrans(newtrans)); // Dispatching an 'addTrans' action with the new transaction object.
  };

  // Returning JSX (React elements) for rendering the component.
  return (
    <>
      <h3 className="font-bold text-4xl mt-10">Add new transaction</h3> {/* Heading for the form. */}

      <form>
        <span class="block mt-5 text-2xl font-medium text-slate-700">
          Text
        </span> {/* Label for the 'text' input field. */}

        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-12px border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Enter text here.."
          type="text"
          name="text"
          onChange={(e) => {
            setText(e.target.value); // Updating the 'text' state with the input value onChange.
          }}
        />

        <span class="block text-2xl font-medium text-slate-700">
          Amount <br />
          (negative - expense, positive - income)
        </span> {/* Label for the 'amount' input field. */}

        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-12px border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Enter amount here.."
          type="number"
          name="number"
          onChange={(e) => {
            setAmount(e.target.value); // Updating the 'amount' state with the input value onChange.
          }}
        />
      </form>

      <button
        className="mt-6 px-3 py-4 w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleSubmit} // Triggering the 'handleSubmit' function when the button is clicked.
      >
        Submit
      </button> {/* Submit button for the form. */}
    </>
  );
}
