import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { User } from '../App';


const Homedecor = () => {
    const{dummy}=useContext(User)
    const deco=dummy.filter((x)=>x.type==='decor')
  return (
    <div>
      <div className='d-flex' style={{ flexWrap:'wrap'}}>
      {deco.map((item)=>(
             <div>
              <Card style={{ width: '18rem',marginLeft:'120px',marginTop:'30px'}}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button   variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
         </div>
      ))}
       </div>
    </div>
  )
}

export default Homedecor
