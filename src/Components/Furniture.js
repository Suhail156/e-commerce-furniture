import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { User } from '../App';
import { useNavigate, useParams } from 'react-router-dom';

const Furniture = () => {
    const {type} =useParams()
    const{dummy,search}=useContext(User)
    const nav=useNavigate()

    const furn=dummy.filter((xy)=>xy.type===type)
    console.log(furn);
  return (
    <div className='d-flex' style={{ flexWrap:'wrap'}}>
      {(type==undefined?search:furn).map((item)=>(
             <div>
              <Card style={{ width: '18rem',marginLeft:'120px',marginTop:'30px'}}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card>₹{item.price}</Card>
        {/* <Button   variant="primary">Buy Now</Button> */}
        <Button   variant="primary" onClick={()=>nav(`/${item.type}/${item.id}`)}>Show</Button>
      </Card.Body>
    </Card>
         </div>
      ))}
       </div>
   
  )
}

export default Furniture



