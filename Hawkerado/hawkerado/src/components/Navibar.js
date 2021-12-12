import {Navbar,Container,Nav} from 'react-bootstrap';
import React,{useContext}  from 'react';
import {useEffect} from 'react';
import SearchBar from './SearchBar';
import { cuisineContext } from '../App';




function Navibar() {
    const [cuisine,setCuisine] = useContext(cuisineContext)
    

    //const [cuisine, setCusine] = useContext(cuisineContext); 
    //const [cuisine, setCusine] = useGlobalState(cuisineContext); 
    

    useEffect(() => {
        // Update the document title using the browser API
        console.log(cuisine,"<<")
      },[cuisine]);

    
    return (
      <div className="Navibar">
          <div className='NavBackImage'>
          <Navbar className='colorNav'  expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img alt="panipuri" className='logo' src = "https://i.ibb.co/bv0NtT3/panipuri-indian-street-food-vector-260nw-1483767110-removebg-preview-1.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="LogIn" href="#home">Log In</Nav.Link>
                    <Nav.Link className="SignUp" href="#link">Sign Up</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className='brandName'>
                Hawkerado
                {cuisine}
            </div>
            <div className='SearchComponent'>
            <SearchBar />
            </div>
            </div>
            
      </div>
    );
  }
  
  export default Navibar;
  