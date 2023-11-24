// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BookDetail = () => {
   
//   return (
//     <div>
//         <div className='okay d-flex justify-content-center align-items-center' style={{minHeight:"91.6vh",background:"#023020"}}>
        
//         <div className='container  p-4  '>
//         <div className="mb-3 ">
//   <label for="exampleFormControlInput1" className="form-label text-white">Book Name </label>
//   <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name " value={Data.Bookname} name="Bookname" onChange={change}/>


// <label for="exampleFormControlInput1" className="form-label text-white" >Author Name </label>
//   <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name " value={Data.author} name="author" onChange={change}/>

// <label for="exampleFormControlInput1" className="form-label text-white" >Description </label>
//   <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description of Book"  value={Data.desc} name="desc" onChange={change}/>

  

//   <label for="exampleFormControlInput1" className="form-label text-white">Image  </label>
//   <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of Image " value={Data.image} name="image" onChange={change}/>

//   <label for="exampleFormControlInput1" className="form-label text-white" >Price</label>
//   <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Price  "  value={Data.price}name="price" onChange={change}/>
  
// </div>
// <button className='btn btn-success' onClick={submit}>Update</button>
// </div>
// </div>
//     </div>
//   )
// }

// export default BookDetail