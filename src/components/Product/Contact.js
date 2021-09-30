import React from 'react';
import { Stack, Grid, Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const gridStyle = {
    position: 'fixed', 
    top: '100%',
    transform: 'translate(0, -100%)',
    left: 0, 
    width: '100%',
    padding: '10px 0 10px 40px', 
    backgroundColor: '#ecf0f1',
}

const Contact = ({ contact: { sellerName, sellerCompany, sellerEmail, sellerPhone }}) => {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
    const smallScreen = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const largeScreenContact = (
        <Stack 
            spacing={1} 
            style={{ 
                marginTop: '50px', 
            }}>
            <Typography variant="h5">Seller</Typography>
            <Typography variant="h6">{sellerCompany}</Typography>
            <Typography variant="h7">{sellerName}</Typography>
            <Grid container style={{ width: '100%', marginTop: '30px' }}>
                <Grid item xs={6}>
                    <Button href={`mailto:${sellerEmail}`} style={{ width: '80%'}} variant="outlined">Mail</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button href={`tel:${sellerPhone}`} style={{ width: '80%'}} variant="outlined">Call</Button>
                </Grid>
            </Grid>
        </Stack>
    );

    const smallScreenContact = (
        <Grid 
            alignItems="center" 
            container 
            style={gridStyle}>
            <Grid item xs={6} sm={3}>
                <Button href={`mailto:${sellerEmail}`} style={{ width: '80%'}} variant="outlined">Mail</Button>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Button href={`tel:${sellerPhone}`} style={{ width: '80%'}} variant="outlined">Call</Button>
            </Grid>
            {smallScreen ? null : <Box style={{ 
                display: 'flex', 
                flexDirection: 'column',
                }}>
                <Typography variant="h7">{sellerCompany}</Typography>
                <Typography variant="h7">{sellerName}</Typography>
            </Box>}
        </Grid>
    )

    return largeScreen ? largeScreenContact : smallScreenContact;
};

export default Contact;