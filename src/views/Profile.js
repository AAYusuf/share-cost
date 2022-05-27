import React, { Component } from 'react'
import {
     Button,
     Row, 
     Col, 
     Table,
     Card,
     CardBody,
     CardTitle,
     CardText,
     CardImg } from 'reactstrap'
import AccountMenu from '../components/AccountMenu'
import DemoNavbar from '../components/Navbar';
import {useAuth} from '../contexts/AuthContext'

const Profile = () => {
     const {currentUser} = useAuth()
     let src =(currentUser.photoURL?currentUser.photoURL:"")
     
        return (
            <div>
                <DemoNavbar />
                <Row>
                    <h4>Hi {currentUser.email}</h4>
                </Row>
                <Row  style={{ height: '100vh' }}>
                    <Col className="col-md-3 no-float" >
                        <AccountMenu/>
                    </Col>
                    <Col style={{ backgroundColor: '#F0F0F0'}}>
                        <Row>
                            <Col className="col-md-6">
                                 My Profile
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><b> Name</b></td>
                                            <td> {currentUser.displayName}</td>
                                        </tr>
                                        <tr>
                                            <td><b> Username</b></td>
                                            <td> Name</td>
                                        </tr>
                                        <tr>
                                            <td><b> Email</b></td>
                                            <td> {currentUser.email}</td>
                                        </tr>
                                    </tbody>
                                    <Button className="mt-4" color="primary" type="submit">
                                       Edit Profile
                                    </Button>
                                </Table>
                            </Col>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            
                                        </CardTitle>
                                        <CardImg
                                            alt="Card image cap"
                                            src={src}
                                            top
                                           
                                            />
                                        <CardText>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                       
                    </Col>
                </Row>
            </div>
        )
    
}
export default Profile