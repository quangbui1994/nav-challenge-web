import { Box, FormControl, InputLabel, MenuItem, Typography, Grid, Select } from '@mui/material';
import React from 'react';
import { priceList, numberFormat } from '../../../utils';

const menuItemStyle = {
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'block',
    paddingLeft: '8px'
}

const Price = ({ setPrice }) => {
    const [priceCar, setPriceCar] = React.useState({ 'from': '', 'to': '' });

    const handleChange = (event) => {
        const newPriceCar = {
            ...priceCar,
            [event.target.name]: event.target.value
        };
        setPriceCar(newPriceCar);
        setPrice(newPriceCar);
    };
    return (
        <Box>
            <Typography>Price</Typography>
                <Grid container spacing={2}>
                    {Object.keys(priceCar).map(item => (
                        <Grid item xs={6} key={item}>
                            <FormControl fullWidth sx={{ marginTop: 1 }}>
                                <InputLabel id={`${item}-label`}>
                                    {item.charAt(0).toUpperCase().concat(item.slice(1))}
                                </InputLabel>
                                <Select
                                    style={{ width: '100%' }}
                                    labelId={`${item}-label`}
                                    id={item}
                                    value={priceCar[item]}
                                    name={item}
                                    onChange={handleChange}
                                    label={item}
                                >
                                    {priceList.map(price => (
                                        <MenuItem key={price} style={menuItemStyle} value={price}>{numberFormat(price)} CHF</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}
                </Grid>
        </Box>  
    );
};

export default Price;