
import Header from "./components/header";
import "./App.css";
import IncExp from "./components/IncExp";
import History from "./components/history";
import AddTrans from "./components/AddTrans";
import Balance from "./components/Balance";

function App() {

  return (
    <>
      <div className="flex flex-col justify-center  items-center gap-12">
       <Header/>
        <div>
          <Balance/>
          <IncExp/>
          <History/>
          <AddTrans/>
        </div>
      </div>
    </>
  );
}

export default App;
