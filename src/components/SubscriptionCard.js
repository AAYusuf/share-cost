import react from 'react';
import{
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg 
} from 'reactstrap';
import netflix from '../assets/images/icons/netflix.jpeg';


const SubscriptionCard = ({sub}) => {
    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5">
                    {sub.subscriptionTitle}
                </CardTitle>
                <CardImg
                    alt="Card image cap"
                    src={netflix}
                    top
                    width="100%"
                    />
                <CardText>
                    {sub.subscriptionDescription}
                </CardText>
            </CardBody>
         </Card>
    )
}
export default SubscriptionCard