import React from 'react';
import { Stack } from '@mui/material';
import ProductCard from './ProductCard/ProductCard';

const ListItems = ({ products }) => {
    return (
        <Stack spacing={2}>
            {products?.map(product => <ProductCard product={product}/>)}
        </Stack>
    );
};

export default ListItems;