import { Box, Typography, Grid } from '@mui/material';
import React from 'react';

const Equipment = ({ equipment }) => {
    return (
        <Box>
            <Typography variant="h6">Equipment</Typography>
            <Grid container spacing={1} style={{ marginTop: 10 }}>
                {equipment.sort().map(equipment => (
                    <Grid key={equipment} item xs={6} sm={4} md={3} direction="column">
                        <Typography>- {equipment.charAt(0).toUpperCase().concat(equipment.slice(1))}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Equipment;