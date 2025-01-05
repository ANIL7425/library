import { Link } from "react-router-dom";

function Header()
{
    return(
        <>
            <ul className="flex align-middle justify-center m-4">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>contact</li>
                </Link>
                <Link to="/Demo">
                    <li>Demo</li>
                </Link>              
                   
            </ul>
        </>
    )
}
export default Header;