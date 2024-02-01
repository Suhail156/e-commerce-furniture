import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { User } from '../App'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Singlepage = () => {
    const{id}=useParams()
    const{dummy,cart,setCart,data,use}=useContext(User)
    const nav=useNavigate()
    let single=dummy.find((item)=>item.id==id)
      console.log(dummy);
    // const addcart=(single)=>{
    //   let singleData=cart.find((item)=>item.id==single.id)
    //   if (singleData){
    //     const result=cart.map((x)=>x.id==id?{...x,qty:x.qty+1,price:(x.qty+1)*x.price}: x)

    //      setCart(result)
    //      console.log(result);
    //   }else{
    //     // alert('product already added') 
    //     setCart([...cart,{...single,price:single.price}])
    //   }
        
     
    console.log(use);
    // }
    console.log(single);
    const cartshow=()=>{
      let dataofcart = use.cart.find((x)=>x.id===single.id)
      console.log(dataofcart);
      if(!dataofcart){
       use.cart.push(single)
      }
      else{
        dataofcart.qty += 1
         
      }
      // nav(admin?'/cart':'/login')
    }
    
  return (
    <div>
      {/* <img src={single.img}/> */}
      {/* <h1></h1> */}
      <div className='d-flex' style={{ flexWrap:'wrap'}}>
      
             <div>
              <Card style={{ width: '30rem',marginLeft:'400px'}}>
      <Card.Img variant="top" src={single.img} />
      <Card.Body>
        <Card.Title>{single.title}</Card.Title>
        <Card.Title>{single.qty}</Card.Title>
        <Card>₹{single.price}</Card>
        
        <Button   variant="primary" onClick={use?cartshow:()=>nav('/login')}>Add to Cart</Button>
      </Card.Body>
    </Card>
         </div>
      
       </div>
    </div>
  )
}

export default Singlepage
