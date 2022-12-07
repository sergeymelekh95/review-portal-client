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
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthInfo, logOut as leaveAcc } from '../features/auth/authSlice';

export const Header = () => {
    const dispatch = useDispatch();
    const authInfo = useSelector(selectAuthInfo);

    const { username } = authInfo;

    const logOut = () => dispatch(leaveAcc());

    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Logo />
                    <Search />
                    {username ? (
                        <>
                            <IconButton size='large' color='inherit'>
                                <AccountCircle />
                            </IconButton>
                            <Typography variant='h6' component='span'>
                                {username}
                            </Typography>
                            <IconButton onClick={logOut} size='large' color='inherit'>
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
