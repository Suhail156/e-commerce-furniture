import React, { useContext, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../App';
import zIndex from '@mui/material/styles/zIndex';
import { Button } from 'react-bootstrap';


const Editpage = () => {
    
    
    const { id } = useParams();
      const titleref=useRef(null)
      const priceref=useRef(null)
      const qtyref=useRef(null)
         const nav=useNavigate()

      
        const { dummy, setdummy } = useContext(User);
        const findval=dummy.find((x)=>x.id==parseInt(id))
          
          
      const[editdata,setEditdata]=useState({
        title:findval.title,
        price:findval.price,
        qty:findval.qty
        })
         console.log(findval);
       const edithandler=()=>{
        const updatetitle=titleref.current.value
        const updateprice=priceref.current.value
        const updateqty=qtyref.current.value
           
           setEditdata({
            title:updatetitle,
            price:updateprice,
            qty:updateqty
           })
          const updatedproduct=dummy.map((item)=>item.id===parseInt(id)
          ?{
            ...item,
            title:updatetitle,
            price:updateprice,
            qty:updateqty
          }
          :item
          )
          setdummy(updatedproduct)
          nav('/productside')
       }
       

    return (
        <div>
       
            
                <label>Edit Title:</label>
                <input type='text' defaultValue={editdata.title} ref={titleref} />
                <br />
                <label>Edit price:</label>
                <input type='text' defaultValue={editdata.price} ref={priceref}  />
                <br />
                <label>Edit qty:</label>
                <input type='text' defaultValue={editdata.qty} ref={qtyref}  />
                <br/><br/>
               <Button onClick={edithandler}>Enter</Button>
            
        </div>
    );
};

export default Editpage;


      
      


