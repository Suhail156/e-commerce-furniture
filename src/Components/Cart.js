import React, { useContext, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { User } from '../App'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
    
    
    const{cart,setCart,data , use,render,setrender}=useContext(User)
    
      const nav=useNavigate()

      const increment=(id)=>{
        const add=use.cart.find((x)=>x.id==id)
        add.qty += 1
        setrender(!render)
      
      }
      const decrement=(id)=>{
        const add=use.cart.find((x)=>x.id==id)
       if(add.qty>1) {add.qty -= 1
        setrender(!render)}
      }
       
      
       const deletehandler=(id)=>{
        const filterdata=use.cart.filter((item)=>item.id !== parseInt(id))
        
        
        
       use.cart = filterdata
       setrender(!render)
        console.log(cart);
       }

       console.log(use)
       

  return (
    <div>
      {/* <img src={single.img}/>
      <h1>{single.title}</h1>
      <h3>{single.price}</h3> */}
      <div className='d-flex' style={{ flexWrap:'wrap'}}>
      {use?.cart?.map((single)=>(

          <div>
              <Card style={{ width: '200px',marginLeft:'250px', height:'10px'}}>
      <Card.Img variant="top" src={single.img} />
      <Card.Body>
        <Card.Title >{single.title}</Card.Title>
        <Card.Title>{single.qty}</Card.Title>
        <Button onClick={()=>increment(single.id)}>+</Button>
        <Button onClick={()=>decrement(single.id)}>-</Button>
        <Card.Title>₹{single.qty*single.price}</Card.Title>
        
        
        
        <Button   variant="primary" onClick={()=>nav('/payment')}>Payment</Button>
        <br/> <br/>
        <Button onClick={()=>deletehandler(single.id)}>Remove</Button>
         
      </Card.Body>
    </Card>
         </div>
    ))
         }
      
       </div>
    </div>
  )
}

export default Cart
