import {Outlet, Link} from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <div>
            <nav>
                <div className="NavBarContainer">
                    <div>
                        <Link className="myLink" to="/">GameInfo</Link>
                    </div>
                    <div>
                        <Link className="myLink" to="/game">Start the Game</Link>
                    </div>
                    <div>
                        <Link className="myLink" to="/credit">Credit</Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
};

export default Nav;
