import { Box, Typography } from '@mui/material';
import React from 'react';

const Description = ({ description }) => {
    return (
        <Box>
            <Typography variant="h6" style={{ marginBottom: 15 }}>Description</Typography>
            <Typography variant="h7">{description}</Typography>
        </Box>
    );
};

export default Description;