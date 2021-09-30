import { Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const menuItemStyle = {
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'block',
    paddingLeft: '8px'
}

const Sorter = ({ setSorter }) => {
    const [type, setType] = React.useState('');
    const them = useTheme();
    const largeScreen = useMediaQuery(them.breakpoints.up('md'));

    const handleChange = (event) => {
        setType(event.target.value);
        setSorter(event.target.value);
    };
    
    return (
        <Box sx={{ marginBottom: largeScreen ? 3 : 0 }}>
            {largeScreen ? <Typography variant="h7">Sorting</Typography> : null}
            <FormControl fullWidth sx={{ marginTop: largeScreen ? 1.5 : 0 }}>
                <InputLabel id="demo-simple-select-label">Default</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Default"
                    style={{ width: largeScreen ? 'auto' : '100px' }}
                    sx={{
                        '& .MuiOutlinedInput-root:hover': {
                            outline: 'none'
                        }
                    }}
                    onChange={handleChange}
                >
                    <MenuItem style={menuItemStyle} value='ascending'>Ascending</MenuItem>
                    <MenuItem style={menuItemStyle} value='descending'>Descending</MenuItem>
                </Select>
            </FormControl>
        </Box> 
    );
};

export default Sorter;
