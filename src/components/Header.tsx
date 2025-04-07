import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav style={{ backgroundColor: '#3287a8', padding: '10px 0',  alignItems: 'center' }}>

            <div className="header">
                <div className="container">
                    <Link to= "/" className="brand-logo">
                       Open Data Metrics
                    </Link>
                    <ul id="nav-mobile" className="navbar">

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
