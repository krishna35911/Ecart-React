import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptycart, removefromcart } from '../redux/slices/cartSlice';

function Cart() {

  const[total,setTotal]=useState(0)
  const navigate=useNavigate()

  const cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const dispatch=useDispatch()

  
  const handlecart=()=>
  {
    alert("your order placed successfully")
    dispatch(emptycart())
    navigate('/')
  }
  
  const gettotal=()=>
  {
    const totalprice=cartArray.map((item)=>item.price).reduce((n1,n2)=>n1+n2,0);
    setTotal(totalprice)
  }

  useEffect(()=>{
    gettotal()
  },[cartArray])

  return (
    <>
      <div style={{marginTop:'100px'}}>
        <div className='row'>
          {cartArray?.length>0?
  
          <div className='d-flex justify-content-between align-items-center'>
            <div className='col-lg-6 m-3'>
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray?.map((item,index)=>(<tr>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td><img style={{width:'50px',height:'100px'}} src={item.image} alt="" /></td>
                    <td>{item.price}</td>
                    <td><Button onClick={()=>dispatch(removefromcart(item.id))} variant="outline-danger">
                  <i class="fa-solid fa-trash"></i>
                  </Button></td>
                  </tr>))}
                </tbody>
              </table>
            </div>

            <div className='col-lg-6 text-center'>
              <h2 className='mb-5'>Summary</h2>
              <h4 className='mb-3'  style={{fontSize:'20px'}}>Total number of items:{cartArray.length}</h4>
              <h4 className='mb-2' style={{fontSize:'20px'}}>Price : <span className='text-warning fw-bold'>{total}</span></h4>
              <Button onClick={handlecart} className='btn btn-success rounded w-50 mt-5'>Checkout</Button>
            </div>
          </div>
  
          :<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" style={{width:'400px'}}></img>
            <h3>Your cart is empty</h3>
            <Link to={'/'}  style={{marginBottom:'200px'}} className='mt-4 btn btn-success'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
         </div>}
        </div>
      </div>
    </>
  )
}

export default Cart
