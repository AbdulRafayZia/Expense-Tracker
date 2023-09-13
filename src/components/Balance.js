import { useSelector } from "react-redux";
export default function Balance() {
    const State = useSelector(state=>state.Transaction);
    return(
        <>
         <h4 className="font-semibold text-2xl ">Your balance</h4>
          <h2 className="m-3 font-bold text-5xl">${State.total}.00</h2>
        </>
    )
    
}