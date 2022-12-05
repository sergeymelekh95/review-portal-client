import { useForm } from 'react-hook-form';
import {
    Button,
    TextField,
    Link,
    Box,
    Container,
    IconButton,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LoginWrapper } from '../components/LoginWrapper';

export const SignIn = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <LoginWrapper title='Sign in'>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component='form'
                sx={{ mt: 1 }}
            >
                <TextField
                    margin='normal'
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    {...register('email', { required: true })}
                />
                <TextField
                    margin='normal'
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    {...register('password', { required: true })}
                />
                <Container>
                    <IconButton size='large' color='primary'>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton size='large' color='primary'>
                        <FacebookIcon />
                    </IconButton>
                </Container>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Link to={`/signUp`} component={NavLink} variant='body2'>
                    {"Don't have an account? Sign Up"}
                </Link>
            </Box>
        </LoginWrapper>
    );
};
