import DemoNavbar from '../components/Navbar';
import {useAuth} from '../contexts/AuthContext'
import {Button, Col, Row} from 'reactstrap'
import AccountMenu from '../components/AccountMenu';

const MyAccount = () =>{
    const {currentUser} = useAuth()
    return(
        <div>
            <DemoNavbar />
            <Row>
                 <h4>Hi {currentUser.email}</h4>
            </Row>
            <Row style={{ height: '100vh' }}>
                <Col className="col-md-3 no-float" >
                    <AccountMenu/>
                </Col>
                <Col style={{ backgroundColor: '#F0F0F0'}} >
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div>
                            <a  href="/my-subscriptions" style={{border:" 1px solid black", padding:"0.5rem"}}> Shared Subscriptions</a>
                            <a href="/joined/subscriptions"style={{border:" 1px solid black", padding:"0.5rem"}}> Joined Subscriptions</a>
                        </div>
                       <div>
                            <Button
                                className="mt-4"
                                color="primary"
                                type="submit"
                                href="/create-subscription"
                                > 
                                Create Subscription
                            </Button>
                       </div>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default MyAccount