import React from 'react'
import { Link } from 'react-router-dom';
import fav from '../assets/fav.jpg'

const Home = () => {
  return (
    <div className='Home-Page  text-white container-fluid d-flex justify-content-center align-items-center' style={{background:"#8B8000"}} >
             <div className="black-line"></div>
        <div className='row container '>
            <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column'  style={{height:"80.6vh"}}>
              <h2 style={{fontSize:"80px"}}>BOOK STORE</h2>
              <h3 style={{fontSize:"50px", color:"#ffffff"}}>FOR YOU</h3>
              <p className='mb-0'>Checkout The Books From Here </p>
              <Link to="/books" className='viewBook my-3 ' style={{background:"#000000", border:'1px black solid'}}>View Books</Link>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column'  style={{height:"80.6vh"}}>
              <img className="img-fluid homeimg" src={fav} style={{height:'500px'}}></img>
            </div>
        </div>
    </div>
  );
}

export default Home;