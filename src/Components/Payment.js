import React, { useContext } from 'react'
import { User } from '../App'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
 const{cart,use}=useContext(User)
   const nav=useNavigate()
     console.log(cart);

     
    
  return (
    <div>
      <h1>{use&&<>total price:{use.cart.reduce((acc,curr)=>acc+=curr.price*curr.qty,0)}</>}</h1>
       <Button onClick={()=>nav('/cart')}>Cancel</Button>
    </div>
  )
}

export default Payment
