import React, { useContext } from 'react'
import { User } from '../App'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Userside = () => {
    const{data}=useContext(User)
    const nav=useNavigate()
  return (
    <div>
         <div><Button onClick={()=>nav('/admin')}>Back to Admin</Button></div>

      {data.map((x,index)=>
        <table class="table table-striped">
  <thead>
    <tr>
    <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      
    </tr>
  </thead>
  {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody> */}
    <tr>
      <th scope="row">{x.name}</th>
      <td>{x.email}</td>
      <td>{x.password}</td>
      <td></td>
      <td></td>
    </tr>

       </table> 
      )}
    </div>
  )
}

export default Userside
