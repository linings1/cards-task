import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const AddToCartButton = ({ cardId }) => {

    return (
        <CardActions>
            <Button href={`https://greet.bg/?add-to-cart=${cardId}`} size="small">
                Add to cart
            </Button>
        </CardActions>
    )
}

export default AddToCartButton;