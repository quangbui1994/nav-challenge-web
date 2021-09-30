import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './ProductImage.module.css';

export const ImageHolder = ({ id, number }) => {
    return (
        <div className={styles.Picture}>
            <picture>
                <source
                    srcset={`${process.env.PUBLIC_URL}/assets/images/${id}/${number}-sm.webp 360w,
                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-md.webp 768w,
                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-lg.webp 1025w,
                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-xl.webp 1280w,`}
                    type="image/webp"/>
                <source
                    srcset={`${process.env.PUBLIC_URL}/assets/images/${id}/${number}-sm.jpg 360w,
                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-md.jpg 768w,
                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-lg.jpg 1025w,
                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-xl.jpg 1280w,`}
                    type="image/jpg"/>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${id}/${number}-lg.jpg`} alt={`Car image ${number}`} />
            </picture>
        </div>
    )
}

const ProductImage = ({ id, modal }) => {
    const theme = useTheme();

    return (
        <Carousel 
            indicatorIconButtonProps={{
                style: {
                    display: modal ? 'none' : 'auto'
                }
            }}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    transform: modal ? 'scale(2.5)' : 'scale(1)',
                }
            }} 
            NavButton={({onClick, className, style, next, prev}) => {
                const onClickHandler = (e) => {
                    e.preventDefault(); 
                    onClick()
                }
        
                return (
                    <div 
                        component={ArrowForwardIosIcon}
                        onClick={(e) => onClickHandler(e)} 
                        className={className} 
                        style={style}>
                            {next && <ArrowForwardIosIcon/>}
                            {prev && <ArrowBackIosNewIcon/>}
                    </div>
                )
            }}
            sx={{ padding: 0 }} autoPlay={false}>
            {
                Array.from(Array(7)).map( (_, i) => <ImageHolder id={id} number={i + 1} key={i} /> )
            }
        </Carousel>
    );
};

export default ProductImage;