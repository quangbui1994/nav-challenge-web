import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Rating = ({ setRating }) => {
    const [state, setState] = React.useState({
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false
    });

    const handleChange = (event) => {
        const newState = {
            ...state,
            [event.target.name]: event.target.checked,
        }
        setState(newState);
        setRating(newState);
    };

    return (
        <Box>
            <Typography>Rating</Typography>
            <FormGroup>
                <Grid container spacing={2}>
                    {Object.keys(state).map(item => (
                        <Grid item xs={6} key={item}>
                            <FormControlLabel 
                                style={{ marginLeft: 0 }}
                                control={<Checkbox checked={state[item]} onChange={handleChange} name={item}/>} 
                                label={item} />
                        </Grid>
                    ))}
                </Grid>
            </FormGroup>
        </Box> 
    );
};

export default Rating;