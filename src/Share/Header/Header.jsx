import React, {useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import {Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from 

import './Header.css';



function Header(props){
    const [active,setActive] =useState('Home');
    const handlerActive = (value)=>{
        SecurityPolicyViolationEvent(value);
        console.log(value);
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav mr-auto" />
        <Navbar.Brand href="#home"><img src=""
            SAM Channel</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Header;