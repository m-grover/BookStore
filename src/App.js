import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Books from './Pages/Books';
import AddBook from './Pages/AddBook';
import Footer from './components/Footer';
import BookDetail from './Pages/BookDetail';
import BookForm from './components/BookForm';
import UpdateBookComponent from './components/UpdateBook';
import DeleteBookComponent from './components/DeleteBookComponent';
 

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/books" element={<Books/>}/>
        <Route exact path="/addbook" element={<AddBook/>}/>
        <Route path='/updateBook/:id' element={<UpdateBookComponent/>}/>
        
        <Route path='/deleteBook/:id' element={<DeleteBookComponent/>} />
      </Routes>
     <Footer/>

    </Router>
    <div className="App">
    
  
  

    </div>
    </>
  );
}

export default App;
