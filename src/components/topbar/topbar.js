import React from 'react'
import { Navbar, Nav, NavDropdown,NavItem,NavLink } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
function Topbar(props) {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={props.TopBarToggleClass ? 'toggle' : ''}>
            <div className="container">
            <Navbar.Brand href="/">COVID - 19</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {props.routes.map((prop,key)=>{
                        if (prop.redirect) {
                            return null;
                        }else{
                            return(<LinkContainer to={prop.path} key={key}>
                            <Nav.Link color="white">{prop.name}</Nav.Link>
                        </LinkContainer>)
                        }
                    })}
                    
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Logout" alignRight id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#Logout">Logout</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
           
    )
}

export default Topbar;
