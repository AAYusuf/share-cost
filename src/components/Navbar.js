import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Collapse,
  NavbarToggler,
  Container,
  Button
} from "reactstrap";


 export default function DemoNavbar() {
  const {logout} = useAuth()
    let navigate = useNavigate();
    const {currentUser} = useAuth()

    const handleLogout = async() =>{
        try{
          await logout()
          navigate('/login')
        }
        catch{

        }
    }
   const getLoginButton = () =>{
     if(currentUser){
       return(
        <Button 
        className="primary"
        onClick={handleLogout}>
        Logout
      </Button>
       )
     }
     else{
       return(
        <Button className="primary" tag={Link} to="/login">
          Login
        </Button>
       )
      
     }
   }

  const getNavigation = () =>{
    if(currentUser){
      return(
        <Nav className="me-auto" navbar >
          <NavItem>
            <NavLink href="/home/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/my-account/">
              My Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/my-subscriptions">
              Shared Subscriptions 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/joined/subscriptions">
              Joined Subscriptions 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/my-subscriptions">
              Wallet 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/my-subscriptions">
              Settings 
            </NavLink>
          </NavItem>
         <UncontrolledDropdown inNavbar  nav >
          <DropdownToggle caret nav  >
            Options
          </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/create-subscription/">
                       Add Subscription
                  </NavLink>
                </DropdownItem>
                
                <DropdownItem divider />

                <DropdownItem>
                  Reset
                </DropdownItem>
             </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      )
    }
    else{
      return(
        <Nav className="me-auto" navbar >
          
        </Nav>
      )
     
    }
  
 }
  
    return (
        <Container >
        <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Share Cost
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      {getNavigation()}
      {getLoginButton()}
    </Collapse>
  </Navbar>
  </Container>
        );
  }


