import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import argonReact from '../assets/img/brand/argon-react.png'



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
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav className="nav-link-icon">
            <i className="fa fa-user" aria-hidden="true" />
            <span className="nav-link-inner--text d-lg-none">
                Settings
              </span>
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-primary_dropdown_1"
              right
            >
              <DropdownItem
                href="/profile"
                // onClick={e => e.preventDefault()}
              >
                Profile
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                href="#pablo"
                onClick={handleLogout}
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
       )
     }
     else{
       return(
        <>
            <NavItem className="d-none d-lg-block ml-lg-4">
            <Button
              className="btn-neutral btn-icon"
              color="default"
              href="/login"
              
            >
              <span className="nav-link-inner--text ml-1">
                Login
              </span>
            </Button>
          </NavItem>
          <NavItem className="d-none d-lg-block ">
            <Button
              outline
              className="btn-1"
              color="neutral"
              href="/register"
            >
              <span className="nav-link-inner--text ml-1">
                Signup
              </span>
            </Button>
          </NavItem>
        </>
      )
      
     }
   }

    return (
      <Navbar className="navbar-dark bg-primary " expand="lg">
            <Container>
              <button className="navbar-toggler" id="navbar-success">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-success">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={argonReact}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar-success">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <NavbarBrand className="mr-lg-5" href="#pablo" onClick={e => e.preventDefault()}>
                Success Color
              </NavbarBrand>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink href="/home/">
                        Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/my-account/">
                     How it Works
                    </NavLink>
                  </NavItem>
                   <NavItem>
                    <NavLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Blog <span className="sr-only">(current)</span>
                    </NavLink>
                   </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  </Nav>
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {getLoginButton()}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        
        );
  }


