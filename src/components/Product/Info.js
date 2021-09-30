import React from 'react';
import ProductInfo from '../Home/ProductCard/ProductInfo';
import Contact from './Contact.js';
import { Box } from '@mui/material';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Info = ({ products }) => {
    const { pathname } = useLocation();
    const productId = Number(pathname.split('/').pop());
    const product = products.find(item => item.id === productId);
    const { 
        make, 
        model, 
        price, rating, 
        carRegAt, 
        mileage, 
        version, 
        sellerName, 
        sellerCompany, 
        sellerEmail, 
        sellerPhone
    } = product
    const productInfo = { make, model, price, rating, carRegAt, mileage, version }

    return (
        <Box style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between'
        }}>
            <ProductInfo productInfo={productInfo}/>
            <Contact contact={{ sellerName, sellerCompany, sellerEmail, sellerPhone }}/>
        </Box>
    );
};

const mapStateToProps = state => ({
    products: state
});  

export default connect(mapStateToProps)(Info);