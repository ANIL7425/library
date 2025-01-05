import { useParams } from "react-router-dom";
import libraryData from "../utilities/mockData";
import Booklist from "./Booklist";
import Bookcomp from "./Bookcomp";
function BookDetails()
{
    const params=useParams();
    console.log(params);
    const filterbook=libraryData.filter((book)=>book.id==params.id);  
    return(
        <>
            {filterbook.map((bo) =>(            
                <div key={bo.id}>
                <h1>Author: {bo.author}</h1>
                <p>Title: {bo.title}</p>
                </div>  
            ))}
        </>
    )
}
              
           

export default BookDetails;