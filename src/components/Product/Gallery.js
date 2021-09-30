import React from 'react';
import { Grid, Modal, Box } from '@mui/material';
import Carousel, { ImageHolder } from '../Home/ProductCard/ProductImage';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    boxShadow: 24,
    p: 4,
    padding: 0
};

const Gallery = () => {
    const { pathname } = useLocation();
    const id = Number(pathname.split('/').pop());
    const theme = useTheme();
    const tabletScreen = useMediaQuery(theme.breakpoints.between('sm','md'));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container style={{ margin: 0, width: '100%', alignItems: 'flex-start' }}>
            <Grid 
                onClick={handleOpen}
                item 
                xs={12} 
                sm={6} 
                md={12} 
                style={{ 
                    paddingTop: 0, 
                    paddingLeft: 0, 
                    paddingRight: tabletScreen ? 10 : 0,
                    cursor: 'pointer'
                }}>
                <ImageHolder id={1} number={1} />
            </Grid>
            <Grid 
                item
                spacing={2}
                style={{ paddingLeft: tabletScreen ? 10 : 0, paddingTop: tabletScreen ? 0 : 10 }}
                container xs={12} sm={5.9} md={12}>
                {
                    Array.from(Array(tabletScreen ? 4 : 3)).map((_, i) => (
                        <Grid 
                            key={i} 
                            item 
                            xs={4} 
                            sm={6} 
                            md={4} 
                            
                            >
                            <ImageHolder id={id} number={i + 2} />
                        </Grid>
                    ))
                }
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Carousel modal id={id}/>
                </Box>
            </Modal>
        </Grid>
    );
};

export default Gallery;