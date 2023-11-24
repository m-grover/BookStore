import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DeleteBookComponent.css'; // Import your CSS file

const DeleteBookComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`);
      console.log(response.data.message);
      alert("Book has been deleted!");
      navigate('/books');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className='delete-book-container'>
      <h1 className='delete-book-title'>Delete Book</h1>
      <p className='delete-book-message'>Are you sure you want to delete this book?</p>

      <button className='delete-button' type='button' onClick={handleDelete}>
        Confirm Delete
      </button>
    </div>
  );
};

export default DeleteBookComponent;
