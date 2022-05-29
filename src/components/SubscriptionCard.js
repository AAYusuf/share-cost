import react from 'react';
import moment from 'moment'
import { Link } from "react-router-dom";
import{
    Button,
    Card,
    CardBody,
    CardText,
    Row,
    Col
} from 'reactstrap';

const SubscriptionCard = ({sub}) => {
    return(
        <Card>
            <CardBody>
                <div> 
                    <Row style={{}}>
                        <Col>
                        
                            <h4>{sub.subscriptionTitle}</h4>
                            <small>{sub.visibility} -  Created At:{moment(sub.createdAt.toDate()).format('L')}</small>
                  
                        </Col>
                        <Col  className="mb-2 text-muted" style={{display:"flex", justifyContent:"center"}}>
                        <h3 >₦{sub.subscriptionPrice}</h3> monthly
                        </Col>
                    </Row>
                    
                
               </div>
               
                <CardText className="mt-4">
                    {sub.subscriptionDescription}<br/>
                    {sub.availablePlaces}/{sub.totalPlaces} Subscription(s) Available
                </CardText>
                <Button tag={Link} to={'/subscription/'+sub.id}>
                    View Details
                </Button>
            </CardBody>
         </Card>
    )
}
export default SubscriptionCard