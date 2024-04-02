import { Link } from "react-router-dom"

const Foot = () => {
  return (
   <footer id="footer">
   <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
   </footer>
  )
}

export default Foot