import react from 'react';
import{
    Card,
    CardBody,
    CardImg 
} from 'reactstrap';
import netflix from '../assets/images/icons/netflix.jpeg';


const SubscriptionCard = ({sub}) => {
    return(
        <Card className="card-lift--hover shadow border-0">
            <CardBody className="py-5">
                 <h6 className="text-primary text-uppercase">
                    {sub.subscriptionTitle}
                </h6>
                <CardImg
                    alt="Card image cap"
                    src={netflix}
                    top
                    width="100%"
                    />
                 <p className="description mt-3">
                    {sub.subscriptionDescription}
                </p>
            </CardBody>
         </Card>
    )
}
export default SubscriptionCard