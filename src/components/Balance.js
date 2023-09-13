import { useSelector } from "react-redux";
export default function Balance() {
    const State = useSelector(state=>state.Transaction);
    return(
        <>
         <h4 className="font-bold text-2xl ">Your balance</h4>
          <h2 className="font-bold text-4xl">{State.total}$</h2>
        </>
    )
    
}