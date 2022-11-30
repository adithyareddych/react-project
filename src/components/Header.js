import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            HyderabadUniversity
          </Link>
          <ul className="nav-menu active">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/" className="nav-links">
                About Us
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/signup" className="nav-links">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/apply" className="nav-links">
                Apply Now
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-links">
                Resume Builder
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-links">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-links">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
