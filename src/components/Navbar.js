import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg " style={{background:"#000000",borderBottom:"1px solid white"}}>
  <div className="container">
    <a className="navbar-brand text-white" href="#">BOOKSTORE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <button className="navbar-toggler-icon" style={{color:"black" }}></button>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <Link to="/" className="nav-link active text-white" aria-current="page" href="#">HOME</Link>
        <Link to="/books"className="nav-link text-white" href="#"> BOOKS</Link>
        <Link to="/addbook"className="nav-link text-white" href="#">ADD BOOKS</Link>
        {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
  <div className="white-line"></div>
</nav>
  </div>
  )
}

export default Navbar