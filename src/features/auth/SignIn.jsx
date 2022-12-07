import { TextField, Link, Box, Container, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LoginWrapper } from '../../components/LoginWrapper';
import { ErrorText } from '../../components/ErrorText';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from './useAuth';

export const SignIn = () => {
    const [error, errors, register, handleSubmit, onSubmit, status] = useAuth(
        '/',
        'singIn'
    );

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
                    error={!!errors.email?.message}
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter a valid email',
                        },
                    })}
                />
                {errors.email?.message && (
                    <ErrorText error={errors.email?.message} />
                )}
                <TextField
                    margin='normal'
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    error={!!errors.password?.message}
                    {...register('password', {
                        required: true,
                        minLength: {
                            value: 5,
                            message: 'password should be at least 5',
                        },
                    })}
                />
                {errors.password?.message && (
                    <ErrorText error={errors.password?.message} />
                )}
                <Container>
                    <IconButton size='large' color='primary'>
                        <GoogleIcon />
                    </IconButton>
                    <IconButton size='large' color='primary'>
                        <FacebookIcon />
                    </IconButton>
                </Container>
                {error && <ErrorText error={error} />}
                <LoadingButton
                    type='submit'
                    fullWidth
                    variant='contained'
                    loading={status === 'loading'}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </LoadingButton>
                <Link to={`/signUp`} component={NavLink} variant='body2'>
                    {"Don't have an account? Sign Up"}
                </Link>
            </Box>
        </LoginWrapper>
    );
};
