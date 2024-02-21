import React, { Component } from 'react'
//import logo from '../'
//import {FaLaptopHouse} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';



export default class NavBar extends Component {
state={
    isOpen:false
}
handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen})
}
  render() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">EA Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/borang-aduan">Borang Aduan</Link>
                            </li>
                    </ul>
        </Container>
      </Navbar>
    )
  }
}
