import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="navbar">
                <h2>MovieApp</h2>
                <div className="links">
                    <Link to="/movies">Movies</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/donate">Donate</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
