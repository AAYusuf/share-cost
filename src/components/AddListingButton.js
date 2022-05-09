import react from 'react';
import{
    Card,
    CardBody,
    CardTitle,
    CardImg 
} from 'reactstrap';
import add from '../assets/images/icons/add.png';

export default function AddListingButton(){
    return(
        <Card>
            <CardBody>
                <CardTitle tag="h5">
                    Add Listing
                </CardTitle>
                <CardImg
                    alt="Card image cap"
                    src={add}
                    top
                    width="100%"
                    />
            </CardBody>
         </Card>
    )
}