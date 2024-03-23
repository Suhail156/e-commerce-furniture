
import { useNavigate} from 'react-router-dom'
import { User } from '../App'
import Button from 'react-bootstrap/Button';




import React,{useContext} from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const Cart = () => {
    
    
    const{ use,render,setrender}=useContext(User)
    
      const nav=useNavigate()

      const increment=(id)=>{
        const add=use.cart.find((x)=>x.id==id)
        add.qty += 1
        setrender(!render)
      
      }
      const decrement=(id)=>{
        const add=use.cart.find((x)=>x.id==id)
       if(add.qty>1) 
       {add.qty -= 1
        setrender(!render)}
      }
       
      
       const deletehandler=(id)=>{
        const filterdata=use.cart.filter((item)=>item.id !== parseInt(id))
        
        use.cart = filterdata
       setrender(!render)
       }

       console.log(use)
       

  return (
    <div>
      <h3>My Cart</h3>
      {use?.cart?.map((single)=>(
    <MDBCard style={{ maxWidth: '1540px' }}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src={single.img} alt='...' fluid />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
          <MDBCardTitle> {single.title}</MDBCardTitle>
          <MDBCardText>
             {single.qty}
          </MDBCardText>
          <MDBCardText>
          ₹{single.qty*single.price}
          </MDBCardText>
          {/* <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText> */}
          <Button  onClick={()=>increment(single.id)}>+</Button>
             <Button  onClick={()=>decrement(single.id)}>-</Button>
            <Button  variant="primary" onClick={()=>nav('/payment')}>Payment</Button>
          <br/> <br/>
          <Button className='bg-danger' onClick={()=>deletehandler(single.id)}>Remove</Button>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  )) }
  <div> <span><>{use&&<>total price:{use.cart.reduce((acc,curr)=>acc+=curr.price*curr.qty,0)}</>}</></span></div>
  </div>
 )
 }
 export default Cart
 




// export default function App() {
//   return (

//   );
// }



{/* <div >
<h3>My Cart</h3>

<div>
<Card>

<Card.Header>Your Item</Card.Header>
<Card.Body>
<Card.Img style={{width:'20%',height:'100px'}}  />
<Card.Title></Card.Title>
<Card.Title></Card.Title>
 <Card.Title></Card.Title>        


  

</Card.Body>

</Card>

</div>



</div> */}