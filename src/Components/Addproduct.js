import React, { useContext, useRef } from 'react'
import { User } from '../App'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
    const{dummy,setdummy}=useContext(User)
       const inputref=useRef(null)
         const nav=useNavigate()  

         const addproduct=(e)=>{
            e.preventDefault()
    
           let adtitle=inputref.current.adtitle.value
           let adprice=inputref.current.adprice.value
           console.log(adprice);
          let  adimg=inputref.current.adimg.value
          let  adqty=inputref.current.adqty.value
          let  type=inputref.current.type.value
             const id=dummy.length+1
            const added={id:id,title:adtitle,price:adprice,img:adimg,qty:adqty,type:type}
          
              setdummy([...dummy,added])
              nav('/productside')
            
          } 
  return ( 
    <div>
        <form ref={inputref} onSubmit={addproduct}>
                <label>Title:</label>
                <input type='text'  name='adtitle' required/>
                <br />
                <label>price:</label>
                <input type='text'  name='adprice' required/>
                <br />
                <label>img:</label>
                <input type='text'  name='adimg' required />
                <br/>
                <label>qty:</label>
                <input type='text'  name='adqty'required />
                <br/>
                
                <label>type</label>
                <input type='text'  name='type' required />
                <br /><br />
                 <input  type='submit'/>

               </form>
    </div>
  )
}

export default Addproduct
