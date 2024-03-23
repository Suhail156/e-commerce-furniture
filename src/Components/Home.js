import React  from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Homeimage } from '../Dummies/Dummyfurniture';
import { Navbar } from 'react-bootstrap';

const Home = () => {
   
    const nav=useNavigate()
  return (

    <div >
    
      <div>
      <img src='https://i0.wp.com/hardwareworld.ug/wp-content/uploads/wallpaper.jpg?fit=1332%2C850&ssl=1' className='img-fluid shadow-4' alt='...' style={{width:'70%',height:'550px'}} />

     
      {/* <img src='https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D' className='img-fluid shadow-4' alt='...' style={{width:'65%',height:'380px'}} /> */}
       <br/><br/><br/><br/>
       <h2>Shop by categories</h2>
        </div>
          <div>
          <div className='d-flex' style={{ flexWrap:'wrap'}}>
      {Homeimage.map((item)=>(
             <div >
              <Card style={{ width: '28rem',marginLeft:'120px',marginTop:'30px'}}>
      <Card.Img variant="top" src={item.img} onClick={()=>nav(`/${item.type}`)} />
      <Card.Body>
           
        
      
      </Card.Body>
    </Card>
         </div>
      ))}
       </div>
          </div>
     
          <img src='https://5.imimg.com/data5/SELLER/Default/2021/3/KQ/GB/GG/71499392/new-product.jpeg' alt='...' style={{width:'80%',height:'550px',marginTop:'150px',marginRight:'70px'}} />

       </div>
       
  )
}

export default Home





