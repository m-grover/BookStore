import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';

const UpdateBookComponent = () => {
  const { id } = useParams(); // Use the useParams hook to get the route parameter
  const [bookData, setBookData] = useState({
    Bookname: '',
    desc: '',
    author: '',
    image: '',
    price: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    console.log("working");
    try {
      const response = await axios.put(`http://localhost:1000/api/v1/updateBook/${id}`, bookData); // Use the correct variable 'id'
      console.log(response.data.message);
      alert("Updated successfully")
      navigate("/books");
      // You may want to redirect or perform other actions on successful update
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  useEffect(() => {
    // Fetch book data by ID or load it from your state
    // Make a request to get the book data based on the bookId
    axios.get(`http://localhost:1000/api/v1/getbooks/${id}`).then((response) => {
      setBookData(response.data);
    });
  }, [id]); // Use the correct variable 'id' here as well

  return (


    <div className='okay d-flex justify-content-center align-items-center' style={{minHeight:"91.6vh",background:"#023020"}}>
        
        <div className='container  p-4 '>
        <div className="mb-3 ">
  <label for="exampleFormControlInput1" className="form-label text-white">Book Name </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name " value={bookData.Bookname} name="Bookname" onChange={handleChange}/>


<label for="exampleFormControlInput1" className="form-label text-white" >Author Name </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name " value={bookData.author} name="author" onChange={handleChange}/>

<label for="exampleFormControlInput1" className="form-label text-white" >Description </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description of Book"  value={bookData.desc} name="desc" onChange={handleChange}/>

  

  <label for="exampleFormControlInput1" className="form-label text-white">Image  </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of Image " value={bookData.image} name="image" onChange={handleChange}/>

  <label for="exampleFormControlInput1" className="form-label text-white" >Price</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Price  "  value={bookData.price}name="price" onChange={handleChange}/>
  
</div>
<button className='btn btn-success' onClick={handleUpdate}>UPDATE NOW</button>
</div>
</div>
    // <div>
    //   <h1>Update Book</h1>
    //   <label>Book Name:</label>
    //   <input
    //     type='text'
    //     name='Bookname'
    //     value={bookData.Bookname}
    //     onhandleChange={handlehandleChange}
    //   />

    //   <label>Description</label>
    //   <input
    //     type='text'
    //     name='desc'
    //     value={bookData.desc}
    //     onhandleChange={handlehandleChange}
    //   />

    //   <label>Author:</label>
    //   <input
    //     type='text'
    //     name='author'
    //     value={bookData.author}
    //     onhandleChange={handlehandleChange}
    //   />

    //   <label>Image</label>
    //   <input
    //     type='text'
    //     name='image'
    //     value={bookData.image}
    //     onhandleChange={handlehandleChange}
    //   />

    //   <label>Price:</label>
    //   <input
    //     type='number'
    //     name='price'
    //     value={bookData.price}
    //     onhandleChange={handlehandleChange}
    //   />
    //   {/* Other input fields go here */}
    //   <button type='button' onClick={handleUpdate}>
    //     Update Book
    //   </button>
    // </div>
  );
};

export default UpdateBookComponent;
