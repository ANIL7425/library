import { Link } from "react-router-dom";
import { useEffect } from "react";
import Bookcomp from "./Bookcomp";
function Booklist(props)
{
    return(      
        <div className="flex flex-wrap align-middle justify-center mt-10">
            {props.data.map((msg,index)=>
            {
                console.log({ msgId: msg.id });
                return(
                    <div className="">
        
                        <Link to={`book/${msg.id}`}>
                            <Bookcomp key={index} datas={msg} />
                        </Link>
                        
                        
                    </div>
               )
               
                
            })}
        </div>
    )
}
export default Booklist;