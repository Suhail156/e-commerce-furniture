import React, { useContext } from 'react'
import { User } from '../App'
import { useParams } from 'react-router-dom'

const Payment = () => {
 const{cart}=useContext(User)
  const{id}=useParams()

    let pay=cart.filter((x)=>x.id===id)
    console.log(cart);
  return (
    <div>
      <h1>payment</h1>
      {pay.map((item)=>(
        <h6>{pay.price}</h6>
      ))}
       
    </div>
  )
}

export default Payment
