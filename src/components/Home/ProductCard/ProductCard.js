import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product: { id, make, model, price, rating, carRegAt, mileage, version } }) => {
    const productInfo = { make, model, price, rating, carRegAt, mileage, version }

    return (
        <Container maxWidth="xl" style={{ padding: 10, border: '1px solid #7f8c8d' }}>
            <Link to={`/products/${id}`} style={{ color: 'grey' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}><ProductImage id={id}/></Grid>
                    <Grid item xs={12} sm={6}>
                            <ProductInfo productInfo={productInfo}/>
                    </Grid>
                </Grid>
            </Link>
        </Container>
    );
};

export default ProductCard;