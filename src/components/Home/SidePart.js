import React from 'react';
import Filter from './Filter/Filter';
import Sorter from './Sorter';
import { Grid } from '@mui/material';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const gridStyle = {
    width: '100%', 
    color: "#7f8c8d",
    marginLeft: 0,
}

const SidePart = ({ setSorter, setRating, setRegistration, setPrice }) => {
    const them = useTheme();
    const largeScreen = useMediaQuery(them.breakpoints.up('md'));
    const smallScreen = useMediaQuery(them.breakpoints.between('xs','sm'));

    return (
        <Grid 
            container
            direction={largeScreen ? "column" : "row-reverse"}
            spacing={largeScreen ? 0 : 2} 
            style={{
                ...gridStyle,
                alignItems: largeScreen ? 'stretch' : 'center',
                justifyContent: smallScreen ? 'space-between' : 'flex-start',
                paddingLeft: largeScreen ? '5%' : 0, 
            }}
        >
            <Grid item>
                <Sorter setSorter={setSorter}/>
            </Grid>
            <Grid item style={{ paddingLeft: 0 }}>
                <Filter 
                    setRating={setRating} 
                    setPrice={setPrice} 
                    setRegistration={setRegistration}/>
            </Grid>
        </Grid> 
    );
};

export default SidePart;