import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/Product";

interface Props {
    product: Product;
}

function ProductCard({ product }: Props) {
    return (
        <Card >
            <CardHeader title={product.name} avatar={
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            } titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'secondary.main' } }} />

            <CardMedia
                component="img"
                height="140"
                image={product.pictureUrl}
                title={product.name}
                sx={{ objectFit: 'contain', bgcolor: 'primary.light' }}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5" component="div">
                    <span>$</span>{(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;