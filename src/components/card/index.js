import * as React from 'react';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './index.module.css';
import AddToCartButton from '../addToCartButton';

const GreetCard = ({ card }) => {
    const {
        id,
        name,
        images,
        short_description,
        categories
    } = card;
    return (
        <Card key={id} sx={{ maxWidth: 345 }} className={styles["card"]}>
            <CardMedia
                sx={{ height: 600 }}
                image={images[0].src}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    {short_description}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary" >
                    <Divider light sx={{ margin: "10px" }} />
                    <Typography>Категории:</Typography>
                    {categories && categories?.map(category => {
                        return (
                            <Typography variant="bold" sx={{ fontStyle: "italic" }} key={category?.id}>
                                {category?.name}{" "}
                            </Typography>
                        )
                    })}
                </Typography>
            </CardContent>
            <AddToCartButton cardId={id} />
        </Card >
    );
}

export default GreetCard;