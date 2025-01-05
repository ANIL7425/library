
import './index.css'
import libraryData from './utilities/mockData';
import Booklist from './components/Booklist';
import { useState } from 'react';
import Bookcomp from './components/Bookcomp';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  const [searchText, setSearchText] = useState(""); // Ensure default state
  const [filterBook, setFilterBook] = useState(libraryData || []); // Fallback to empty array if libraryData is undefined
    console.log("hello");
  function handleSearch() {
      const filteredData = libraryData.filter((book) =>
          book.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filteredData);
      setFilterBook(filteredData); // Update filtered data state
  }
  useEffect(()=>
    {
        fetchData()
    },
    []);
async function fetchData()
{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const result=await response.json();
    console.log(result);
    

}




  return (
    <>
      <h1>Book Management Application</h1>
      <Header /> 
      <div className="search flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Search for a Book</h2>
                <input
                    type="text"
                    aria-label="Search for books"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search..."
                    className="search-input w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    className="search-btn px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>   
          <outlet />
         <Booklist data={filterBook}/>
    </>
  )
}

export default App
