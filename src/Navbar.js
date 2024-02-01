import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { User } from './App';
import { RiLogoutCircleRLine } from "react-icons/ri";


function CustomNavbar() {
    const {type}= useParams()
const nav=useNavigate()
const{dummy,search,setsearch,use,setuse, setdata, data}=useContext(User)
   
 const searchedinput=(e)=>{
        e.preventDefault()
        let searching = e.target[0].value
      
        console.log(searching);
        console.log(dummy); 
            let searched = dummy.filter((x)=>x.title.includes(searching))
            console.log(searched);
            if(searched[0]!==undefined){
                setsearch(searched)
                nav('/furniture')

            }
            else{
                alert("item not found")
            }
        
 }
 const logout =()=>{
    setuse(null)
    nav('/')
 }

    return (
        <div>
            <div  style={{backgroundColor:'black'}}>
                <Navbar expand="lg" className="bg-body-dark" >
                    <Container fluid>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Form className="d-flex" onSubmit={searchedinput}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    
                                />
                                <Button type='submit' variant="outline-success" >Search</Button>
                            </Form>
                            <Navbar.Brand className='buil' style={{marginLeft:'350px',color:'white'}} >BUiLd MaRt</Navbar.Brand>
                            <Nav
                                className="me-auto my-2 my-lg-0 "
                                style={{ maxHeight: '100px',marginLeft:'500px'}}
                                navbarScroll 
                            >
                                <Nav.Link style={{color:'white'}}  >
                                    {!use?<FaUser onClick={()=>nav('/login')} />:
                                    <><RiLogoutCircleRLine onClick={logout} />
                                    <span>{use?.name}</span></>}</Nav.Link>
                                <Nav.Link style={{color:'white'}} onClick={()=>nav(use?`/cart`:'/login')} ><FaShoppingCart /></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div style={{marginLeft:'400px'}} >
                <Container >

                    <Nav className="me-auto "  >
                         <Nav.Link style={{color:'black'}} onClick={()=>nav('/')}>Home</Nav.Link>
                        <Nav.Link style={{color:'black'}} onClick={()=>nav('/sofa')}>Sofa</Nav.Link>
                        <Nav.Link style={{color:'black'}} onClick={()=>nav('/matresess')} >Mattresses</Nav.Link>
                        <Nav.Link  style={{color:'black'}} onClick={()=>nav('/decor')} >Home Decor</Nav.Link>
                        <Nav.Link style={{color:'black'}} onClick={()=>nav('/lamps')} >Lamps&Lighting</Nav.Link>
                        
                    </Nav>
                </Container>
            </div>
        </div>


    );
}

export default CustomNavbar;