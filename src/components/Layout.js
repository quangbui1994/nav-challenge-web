import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { Icon } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const screenSizeMapPadding = {
    'lg': 10,
    'md': 10,
    'sm': 8
};

const Layout = ({ children }) => {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('md')) ? 'lg' : null;
    const mediumScreen = useMediaQuery(theme.breakpoints.up('sm')) ? 'md' : null;
    const smallScreen = useMediaQuery(theme.breakpoints.up('xs')) ? 'sm' : null;
    const screenSize = largeScreen || mediumScreen || smallScreen;

    return (
        <Container 
            disableGutters 
            sx={{ 
                paddingX: 5, 
                paddingTop: screenSizeMapPadding[screenSize],
                paddingBottom: '100px'
            }} 
            maxWidth="xl">
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                position: 'absolute',
                top: 15,
            }}>
                <DirectionsCarFilledIcon 
                    sx={{ 
                        color: '#7f8c8d', 
                        marginRight: '15px',
                    }} 
                    fontSize='large'
                />
                <Typography 
                    variant="h4" 
                    sx={{ color: '#7f8c8d', paddingTop: '5px' }}>
                    My awesome car
                </Typography>
            </Box>
            {children}
        </Container>
    );
};

export default Layout;