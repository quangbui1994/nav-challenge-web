import React from 'react';
import { Stack, Typography } from '@mui/material';
import NavigationButtons from './NavigationButtons';
import Main from './Main';
import Equipment from './Equipment';
import Description from './Description';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const Product = ({ products }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.between('xs','sm'));

  const { pathname } = useLocation();
  const productId = Number(pathname.split('/').pop());
  const product = products.find(item => item.id === productId);
  const { equipment, description, sellerName, sellerCompany } = product
   
  return (
    <Stack spacing={5}>
      <NavigationButtons />
      <Main />
      <Equipment equipment={equipment}/>
      <Description description={description}/>
      {smallScreen && 
        (
          <>
            <Typography variant="h5">Seller</Typography>
            <Typography variant="h6">{sellerCompany}</Typography>
            <Typography variant="h7">{sellerName}</Typography>
          </>
        )
      }
    </Stack>
  );
};

const mapStateToProps = state => ({
  products: state
})

export default withRouter(connect(mapStateToProps)(Product));