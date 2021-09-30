import { Icon } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const _ = require('lodash');

export const registrationYears = (() => {
    let max = new Date().getFullYear()
    let min = max - 50
    let years = []
  
    for (let i = max; i >= min; i--) {
      years.push(i)
    }
    return years
})();

export const priceList = _.range(10000, 50000, 1000);

export const numberFormat = val => {
    const formatter = new Intl.NumberFormat('de-DE');
      
    return formatter.format(val);
}

export const formatDate = val => {
    return val.split('-').slice(0, 2).reverse().join('.'); 
}

export const formatYear = val => {
    return Number(val.split('-')[0]); 
}

export const renderStars = rating => {
    return new Array(5).fill(0).map((_, i) => {
        if ((i + 1) <= Math.round(rating)) {
            return <Icon component={StarIcon}/>
        } else {
            return <Icon component={StarBorderIcon}/>
        }
    })
}

//
//****
//****Sort products functions
//****
//
export const sortProductsByNameAscending = products => {
    products.sort((a, b) => {
        const nameA = a.make?.toUpperCase(); 
        const nameB = b.make?.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    return products;
}

export const sortProductsByNameDescending = products => {
    products.sort((a, b) => {
        const nameA = a.make?.toUpperCase(); 
        const nameB = b.make?.toUpperCase(); 
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;
    })
    return products;
}

export const sortProducts = (sorter, newProducts, setProducts) => {
    switch (sorter) {
        case 'default':
            return setProducts([...newProducts]);
        case 'ascending':
            newProducts = sortProductsByNameAscending([...newProducts]);
            return setProducts(newProducts);
        case 'descending':
            newProducts = sortProductsByNameDescending([...newProducts]);
            return setProducts(newProducts);
    }
}

//
//****
//****Filter products functions
//****
//

export const filterProducts = (rating, registration, price, db, setProducts) => {
    let newProducts = db.items;

    //Filter products by rating
    if (rating && Object.values(rating).some(val => val)) {
        newProducts = db.items.filter(product => rating[Math.round(product.rating)])
    }

    //Filter products by registration year
    if (Object.values(registration).every(key => key)) {
        newProducts = newProducts
        .filter(product => registration.from < formatYear(product.carRegAt) && registration.to > formatYear(product.carRegAt));
        setProducts(newProducts);
    }

    //Filter products by price
    if (Object.values(price).every(key => key)) {
        newProducts = newProducts
        .filter(product => price.from < product.price && price.to > product.price);
        setProducts(newProducts);
    }

    setProducts(newProducts);
}

export const filterProductionsByRating = (rating, db, setProducts) => {
    const newProducts = rating && Object.values(rating).some(val => val) ? db.items.filter(product => rating[Math.round(product.rating)]) : db.items;
    setProducts(newProducts);
}

export const filterProductsByRegistration = (registration, db, setProducts) => {
    if (Object.values(registration).every(key => key)) {
        const newProduct = db.items
        .filter(product => registration.from < formatYear(product.carRegAt) && registration.to > formatYear(product.carRegAt));
        setProducts(newProduct);
    }
}
