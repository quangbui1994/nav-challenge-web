import React from 'react';
import Gallery from './Gallery';
import { Grid } from '@mui/material';
import Info from './Info';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Main = () => {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid container spacing={2} style={{ width: '100%', marginLeft: 0 }}>
            <Grid xs={12} md={7} item style={{ paddingLeft: 0 }}>
                <Gallery/>
            </Grid>
            <Grid xs={12} md={5} item style={{ paddingLeft: largeScreen ? '16px' : '8px' }}>
                <Info/>
            </Grid>
        </Grid>
    );
};

export default Main;