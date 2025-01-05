function Bookcomp(props) {
    console.log(props);
    return (
        <div className="flex flex-wrap align-middle justify-center items-center  hover:scale-90 transition duration-150 ease-out">
             <div className="book-card border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 m-6 w-64  overflow-hidden">
            <img 
                src={props.datas.image} 
                alt={props.datas.title} 
                className="book-image rounded-md w-64 h-40" />
            <div className="p-2">
                <p className="book-title text-lg font-semibold">{props.datas.title}</p>
                <p className="book-aauthor text-sm text-gray-500 mb-2">By {props.datas.author}</p>
                <p className="book-descr text-sm text-gray-700">{props.datas.description}</p>
            </div>
        </div>

        </div>
       
    );
}
export default Bookcomp;
