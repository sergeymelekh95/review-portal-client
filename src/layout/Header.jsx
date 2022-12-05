import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Button,
    Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Logo } from '../components/Logo';
import { Search } from '../components/Search';

const user = false;

export const Header = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Logo />
                    <Search />
                    {user ? (
                        <>
                            <IconButton size='large' color='inherit'>
                                <AccountCircle />
                            </IconButton>
                            <Typography variant='h6' component='span'>
                                User name
                            </Typography>
                            <IconButton size='large' color='inherit'>
                                <LogoutIcon />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <Button
                                underline='none'
                                component={NavLink}
                                size='large'
                                color='inherit'
                                to={`/signIn`}
                            >
                                <LoginIcon />
                                <span>Sign in</span>
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
