import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Login from './Components/Login';
import Furniture from './Components/Furniture';
import { Furnituredummy } from './Dummies/Dummyfurniture';
import Singlepage from './Components/Singlepage';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
 export  const User=createContext()
function App() {
   const[data,setdata]=useState([])
   const[dummy,setdummy]=useState(Furnituredummy)
   const[use,setuse]=useState(null)
   const[search,setsearch]=useState([])
   const[render,setrender]=useState(false)
  
   

  return (
    <div className="App">
      
      <User.Provider value={{ data,setdata,dummy,setdummy,search,setsearch,use,setuse,render,setrender}}>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/furniture' element={<Furniture/>}></Route>
        <Route path='/:type' element={<Furniture/>}></Route>
        <Route path='/:type/:id' element={<Singlepage/>}/>
        <Route path='/payment' element={<Payment/>}></Route>

      </Routes>
       </User.Provider>
    </div>
  );
}

export default App;
