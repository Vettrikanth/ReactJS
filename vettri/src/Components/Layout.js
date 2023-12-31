import { Outlet, Link } from "react-router-dom";
// import './App.css';
import "./Layout.css"

const Layout = () => {
    return (
      <div>
        <nav>
              <Link  to="/"><button type="button" className="buttons">Profile</button></Link>
              <Link to="/resume"><button type="button" className="buttons">Resume</button></Link>
              <Link to="/projects"><button type="button" className="buttons">Projects</button></Link>    
              <Link to="/contact"><button type="button" className="buttons">Contact</button></Link>
        </nav>
  
        <Outlet />
      </div>
    )
  };
  
  export default Layout;