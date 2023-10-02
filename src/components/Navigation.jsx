import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';


const Navigation = () => {
//   const navigate = useNavigate()
  return (
    <div>
          <Navbar expand="lg" className=" p-2">
      
        <Navbar.Brand href="#home" style={{fontSize: 40, color: "blue"}}>F<span style={{fontSize: 12}}>site</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mx-5">
          <Nav >
            <Nav.Link href="#home" className='mx-3' >Home</Nav.Link>
            <Nav.Link href="#link" className='mx-3'>Politic</Nav.Link>
            <Nav.Link href="#link" className='mx-3'>Sports</Nav.Link>
            <Nav.Link href="#link" className='mx-3'>Tech</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    </div>
  )
}

export default Navigation