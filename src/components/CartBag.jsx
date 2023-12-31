import * as React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';

const CartBag = ({ number }) => {
    return (
        <Box position="relative">
            <ShoppingBagOutlinedIcon fontSize='medium' />
            <Box
                position="absolute"
                top="17%"
                left="13%"
                padding="4px 6px"
                fontSize='10px'
            >
                {number}
            </Box>
        </Box >
    );
}
export default CartBag