import { Stack, Modal, Box, Button } from '@mui/material';
import React from 'react';
import Price from './Price';
import Rating from './Rating';
import Registration from './Registration';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const buttonStyle = {
    textTransform: 'none',
    color: '#7f8c8d',
    minWidth: '64px',
    padding: '12.5px 25px',
    border: '1px solid grey',
    backgroundColor: 'transparent',
    borderRadius: 4,
    fontSize: 16,
    fontWeight: 400
}

const Filter = ({ setRating, setRegistration, setPrice }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const filterLargeScreen = (
        <Stack spacing={3}>
            <Rating setRating={setRating}/>
            <Registration setRegistration={setRegistration}/>
            <Price setPrice={setPrice}/>
        </Stack>   
    );
    const filterSmallScreen = (
        <>        
            <Button style={buttonStyle} onClick={handleOpen}>Filter</Button>
            <Modal
                sx={{ 
                    '& .css-1wnsr1i': {
                        border: 'none'
                    },
                    '& .MuiTypography-body1': {
                        color: '#7f8c8d'
                    },
                    '& .MuiCheckbox-root': {
                        color: '#7f8c8d'
                    }
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                {filterLargeScreen}
            </Box>
            </Modal>
        </>
    )
    const filter = largeScreen ? filterLargeScreen : filterSmallScreen;
    return filter;
};

export default Filter;