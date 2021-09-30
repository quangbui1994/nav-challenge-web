import React, { useEffect, useState } from 'react';
import ListItems from './ListItems';
import SidePart from './SidePart';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import db from '../../DB.json';
import { sortProducts, filterProducts } from '../../utils';
import {connect} from 'react-redux';
import { setProducts } from '../../store/actions';

const Home = ({ products, setProducts }) => {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [rating, setRating] = useState(null);
    const [registration, setRegistration] = useState({ 'from': '', 'to': '' });
    const [price, setPrice] = useState({ 'from': '', 'to': '' });
    const [sorter, setSorter] = useState('default');

    useEffect(() => sortProducts(sorter, [...products], setProducts), [sorter, rating, registration, price]);

    useEffect(() => filterProducts(rating, registration, price, db, setProducts), [rating, registration, price]);
   
    return (
        <Grid 
            container 
            spacing={2}
            direction={largeScreen ? "row" : "column-reverse"}
            sx={{ 
                margin: 0, 
                width: '100%',
            }}
        >
            <Grid item xs={12} md={8} style={{ paddingLeft: 0 }}>
                <ListItems products={products}/>
            </Grid>
            <Grid item xs={12} md={4} style={{ paddingLeft: 0 }}>
                <SidePart 
                    setRating={setRating} 
                    setPrice={setPrice} 
                    setRegistration={setRegistration} 
                    setSorter={setSorter}/>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => ({
    products: state
});

export default connect(mapStateToProps, { setProducts })(Home);