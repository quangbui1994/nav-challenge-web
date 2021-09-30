import { Box, FormControl, InputLabel, MenuItem, Typography, Grid, Select } from '@mui/material';
import React, { useEffect } from 'react';
import { registrationYears } from '../../../utils';

const menuItemStyle = {
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'block',
    paddingLeft: '8px'
}

const Registration = ({ setRegistration }) => {
    const [registrationDate, setRegistrationDate] = React.useState({ 'from': '', 'to': '' });

    const handleChange = (event) => {
        const newRegistrationDate = {
            ...registrationDate,
            [event.target.name]: event.target.value
        };
        setRegistrationDate(newRegistrationDate);
        setRegistration(newRegistrationDate)
    };

    return (
        <Box>
            <Typography>Registration</Typography>
                <Grid container spacing={2}>
                    {Object.keys(registrationDate).map(item => (
                        <Grid item xs={6} key={item}>
                            <FormControl fullWidth sx={{ marginTop: 1 }}>
                                <InputLabel id={`${item}-label`}>
                                    {item.charAt(0).toUpperCase().concat(item.slice(1))}
                                </InputLabel>
                                <Select
                                    style={{ width: '100%' }}
                                    labelId={`${item}-label`}
                                    id={item}
                                    value={registrationDate[item]}
                                    name={item}
                                    onChange={handleChange}
                                    label={item}
                                >   
                                {registrationYears.map(year => (
                                    <MenuItem key={year} style={menuItemStyle} value={year}>{year}</MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}
                </Grid>
        </Box>  
    );
};

export default Registration;