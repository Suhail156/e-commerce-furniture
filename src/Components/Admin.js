import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Admin = () => {

      const nav=useNavigate()
   
  return (
    <div>
        
        
         <h1>Hi Suhail</h1>
          
          <Button onClick={()=>nav('/userside')}>Userdata</Button>
          <br/><br/>
         <Button onClick={()=>nav('/productside')}>productside</Button>
        
    </div>
    
  )
}

export default Admin

    
    
