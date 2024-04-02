import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
         <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
  )
}

export default Navbar