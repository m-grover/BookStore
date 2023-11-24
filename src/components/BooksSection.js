import React from 'react';
import { Link } from 'react-router-dom';
import './BooksSection.css'; // Import your CSS file

const BooksSection = ({ data }) => {
  return (
    <div className='books-section-container'>
      {data &&
        data.map((item, index) => (
          <div className='book-card' key={index}>
            <div className='book-image'>
              <img src={item.image} alt='' />
            </div>
            <h6 className='book-title'>{item.Bookname.slice(0, 20)}...</h6>
            <b className='book-price'>Rs.{item.price}</b>
            <div className='button-group'>
              <Link
                to={`/updateBook/${item._id}`}
                className='custom-button update-button'
              >
                UPDATE
              </Link>
              <Link
                to={`/deleteBook/${item._id}`}
                className='custom-button delete-button'
              >
                DELETE
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
