import { Grid, Icon, Typography } from '@mui/material';
import React from 'react';
import { numberFormat, formatDate, renderStars } from '../../../utils';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AddRoadIcon from '@mui/icons-material/AddRoad';

const iconStyle = {
    marginRight: 5,
    fontSize: 25,
}

const nameStyle = {
    fontWeight: '500',
    letterSpacing: 1
}

const priceStyle = {
    fontWeight: '500',
    letterSpacing: 1
}

const normalStyle = {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 2
}

const ProductInfo = ({productInfo: { make, model, price, rating, carRegAt, mileage, version }}) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography style={nameStyle}>{make} {model} {version}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon component={DateRangeIcon} style={iconStyle}/>
                <Typography style={normalStyle}>{formatDate(carRegAt)}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon component={AddRoadIcon} style={iconStyle}/>
                <Typography style={normalStyle}>{numberFormat(mileage)}km</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography style={priceStyle}>{numberFormat(price)}-CHF</Typography>
            </Grid>
            <Grid item xs={6}>{renderStars(rating)}</Grid>
        </Grid>     
    );
};

export default ProductInfo;