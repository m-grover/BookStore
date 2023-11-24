import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [Data, setData] = useState({ Bookname: '', author: '', desc: '', image: '', price: '' });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:1000/api/v1/add', Data).then((res) => alert('Book added successfully'));
    navigate('/books');
    setData({ Bookname: '', author: '', desc: '', image: '', price: '' });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80.6vh', background: '#8B8000' }}>
      <div className="container p-4" style={{ background: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', width: '50vw' }}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label text-dark">
            Book Name
          </label>
          <input type="text" className="form-control" id="bookName" placeholder="Enter Book Name" value={Data.Bookname} name="Bookname" onChange={change} />

          <label htmlFor="authorName" className="form-label text-dark">
            Author Name
          </label>
          <input type="text" className="form-control" id="authorName" placeholder="Enter Author Name" value={Data.author} name="author" onChange={change} />

          <label htmlFor="description" className="form-label text-dark">
            Description
          </label>
          <input type="text" className="form-control" id="description" placeholder="Enter Description of Book" value={Data.desc} name="desc" onChange={change} />

          <label htmlFor="imageUrl" className="form-label text-dark">
            Image URL
          </label>
          <input type="text" className="form-control" id="imageUrl" placeholder="Enter the URL of Image" value={Data.image} name="image" onChange={change} />

          <label htmlFor="price" className="form-label text-dark">
            Price
          </label>
          <input type="text" className="form-control" id="price" placeholder="Enter Price" value={Data.price} name="price" onChange={change} />
        </div>
        <button className="btn btn-success w-100" style={{ background: 'black', color: '#fff' }} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBook;
