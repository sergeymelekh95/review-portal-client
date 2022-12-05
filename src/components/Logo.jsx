import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
    return (
        <Button
            underline='none'
            component={NavLink}
            color='inherit'
            to='/'
        >
            <Typography variant='h6' component='span'>
                Logo
            </Typography>
        </Button>
    );
};
