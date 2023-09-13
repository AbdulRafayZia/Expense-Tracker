import { useSelector} from "react-redux";


export default function History() {
    const State = useSelector(state=>state.Transaction);
    return(
        <>
        
        <h3 className=" font-bold text-4xl mt-10 mb-5 ">History</h3>
          <hr />
          <div className="flex flex-col justify-center    items-center mt-3 content-center">
            <ul>
              {State.transactions.map(transaction=>{
                return(
                 <li key={transaction.id} className="w-auto mb-2 ">
                 <div className="flex gap-x-60 rounded-sm bg-gray-100">
               <p className="px-4"  >{transaction.text}</p>
               <p className="px-4" > {transaction.amount}</p>
             </div>
           
             
           </li>
                )
              })}
            </ul>
          </div>
        </>
    )
    
}