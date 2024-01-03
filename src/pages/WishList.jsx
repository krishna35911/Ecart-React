import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {

  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  
  const dispatch=useDispatch()

  const handlewishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='ms-5'>
        {wishlistArray?.length>0?
        wishlistArray.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={4}>
        <Card style={{ width: '18rem',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <Card.Img variant="top" src={item.image} style={{height:'150px',width:'150px'}} className='mx-auto mt-3' />
          <Card.Body>
            <Card.Title>
            {item.title.slice(0,18)}...
            </Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,40)} ....</p>
              <p className='fw-bolder'>Price : ₹{item.price}</p>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <Button onClick={()=>dispatch( removeFromWishlist(item.id))} variant="outline-danger">
              <i class="fa-solid fa-trash"></i>
              </Button>
              <Button onClick={()=>handlewishlist(item)} variant="outline-success">
                <i class="fa-solid fa-cart-plus"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
          </Col>))
          :
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" style={{width:'400px'}}></img>
          <h3>Your wishlist is empty</h3>
          <Link to={'/'}  style={{marginBottom:'200px'}} className='mt-4 btn btn-success'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
       </div>}
      </Row>
    </div>
  )
}

export default WishList
