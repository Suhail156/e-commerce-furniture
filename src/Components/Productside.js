import React, { useContext } from 'react'
import { User } from '../App'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



const Productside = () => {
    const nav=useNavigate()
 
    const{dummy,setdummy}=useContext(User)
            
      console.log(dummy);

          
    const deletehandler=(id)=>{
        const filterdata=dummy.filter((item)=>item.id !== parseInt(id))
        setdummy(filterdata)
       console.log(filterdata);
       }
        
       
      

  return (
 <div>   
        <div style={{marginRight:'1000px'}}><Button onClick={()=>nav('/admin')}>Back to Admin</Button></div>
             <div ><Button  onClick={()=>nav('/addproduct')}>Add Product</Button></div>
              
      {dummy.map((single)=>(

   <div style={{display:"inline-block"}}>
    <Card style={{width: '33rem',marginLeft:'50px',marginTop:'30px'}}>
    <Card.Img variant="top" src={single.img} />
    <Card.Body>
    <Card.Title >{single.title}</Card.Title>
    <Card.Title>{single.qty}</Card.Title>
    <Card.Title>₹{single.price}</Card.Title>
    <br/> <br/>
    <Button onClick={()=>deletehandler(single.id)}>Remove</Button>
     <Button onClick={()=>nav(`/editpage/${single.id}`)} >Edit</Button>
     <br/>
    


    </Card.Body>
    </Card>
   </div>
                          ))}
 
</div>
      )  
   }

export default Productside







