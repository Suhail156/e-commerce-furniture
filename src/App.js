import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Login from './Components/Login';
import Furniture from './Components/Furniture';
import { Furnituredummy } from './Dummies/Dummyfurniture';
import Singlepage from './Components/Singlepage';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Footer from './Components/Footer'
import Admin from './Components/Admin';
import Userside from './Components/Userside';
import Productside from './Components/Productside';
import Editpage from './Components/Editpage';
import Addproduct from './Components/Addproduct';


 export  const User=createContext()
function App() {
   const[data,setdata]=useState([])
   const[dummy,setdummy]=useState(Furnituredummy)
   const[use,setuse]=useState(null)
   const[search,setsearch]=useState([])
   const[render,setrender]=useState(false)
   const[loctionauth,setlocationauth]=useState(false)
  
      
      const location=useLocation()


         useEffect(()=>{
          if(location.pathname.includes('/admin')||location.pathname.includes('/productside')||location.pathname.includes('/userside')||location.pathname.includes('/editpage')||location.pathname.includes('/addproduct')){
            setlocationauth(true)
          }else{
            setlocationauth(false)
          }
         },[location])

  return (
    <div className="App">
      
      <User.Provider value={{ data,setdata,dummy,setdummy,search,setsearch,use,setuse,render,setrender}}>
     {!loctionauth&& <Navbar/>}
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/furniture' element={<Furniture/>}></Route>
        <Route path='/:type' element={<Furniture/>}></Route>
        <Route path='/:type/:id' element={<Singlepage/>}/>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/userside' element={<Userside/>}></Route>
        <Route path='/productside/' element={<Productside/>}></Route>
        <Route path='/editpage/:id' element={<Editpage/>}></Route>
        <Route path='/addproduct'  element={<Addproduct/>}></Route>

      </Routes>
      <Footer/>
       </User.Provider>
    </div>
  );
}

export default App;
